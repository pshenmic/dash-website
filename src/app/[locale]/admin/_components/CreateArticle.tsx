'use client'

import { useState, type ChangeEvent } from 'react'
import { Send } from 'lucide-react'
import { useSdk } from '@/lib/dash-platform/use-sdk'
import { BLOG_CONTRACT_ID, ARTICLE_DOCUMENT_TYPE } from '@/lib/dash-platform/config'
import type { WalletInfo } from '@/lib/dash-platform/types'

interface CreateArticleProps {
  walletInfo: WalletInfo
  onCreated: () => void
}

interface ArticleForm {
  title: string
  content: string
  image: string
}

interface FormErrors {
  title: string | null
  content: string | null
  image: string | null
}

const validateTitle = (value: string): string | null => {
  const trimmed = value.trim()
  if (trimmed.length < 1 || trimmed.length > 512) {
    return 'Title must be 1-512 characters'
  }
  return null
}

const validateContent = (value: string): string | null => {
  const trimmed = value.trim()
  if (trimmed.length < 1 || trimmed.length > 5120) {
    return 'Content must be 1-5120 characters'
  }
  return null
}

const validateImage = (value: string): string | null => {
  if (value.length === 0) return null
  if (value.length > 2000) return 'Image URL must be under 2000 characters'
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      return 'Image must be a valid URL'
    }
  } catch {
    return 'Image must be a valid URL'
  }
  return null
}

export function CreateArticle ({ walletInfo, onCreated }: CreateArticleProps): React.ReactNode {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [form, setForm] = useState<ArticleForm>({ title: '', content: '', image: '' })
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({ title: null, content: null, image: null })

  const handleInputChange = (key: keyof ArticleForm, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm({ ...form, [key]: e.target.value })
    if (fieldErrors[key] != null) {
      setFieldErrors({ ...fieldErrors, [key]: null })
    }
    setSubmitResult(null)
  }

  const handleBlur = (key: keyof ArticleForm): void => {
    let error: string | null = null
    switch (key) {
      case 'title': error = validateTitle(form.title); break
      case 'content': error = validateContent(form.content); break
      case 'image': error = validateImage(form.image); break
    }
    setFieldErrors({ ...fieldErrors, [key]: error })
  }

  const validateAll = (): boolean => {
    const errors: FormErrors = {
      title: validateTitle(form.title),
      content: validateContent(form.content),
      image: validateImage(form.image)
    }
    setFieldErrors(errors)
    return errors.title == null && errors.content == null && errors.image == null
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (!validateAll()) return

    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const sdk = useSdk()
      const extension = window.dashPlatformExtension

      if (extension == null || walletInfo.currentIdentity == null) {
        throw new Error('Wallet not connected')
      }

      let identityContractNonce: bigint

      try {
        identityContractNonce = await sdk.identities.getIdentityContractNonce(
          walletInfo.currentIdentity,
          BLOG_CONTRACT_ID
        )
      } catch (err) {
        if (String(err).startsWith('Error: Could not get identityContractNonce')) {
          identityContractNonce = BigInt(0)
        } else {
          throw err
        }
      }

      const data: Record<string, string> = {
        title: form.title.trim(),
        content: form.content.trim()
      }

      if (form.image.trim().length > 0) {
        data.image = form.image.trim()
      }

      const document = await sdk.documents.create(
        BLOG_CONTRACT_ID,
        ARTICLE_DOCUMENT_TYPE,
        data,
        walletInfo.currentIdentity,
        identityContractNonce + BigInt(1)
      )

      const stateTransition = await sdk.documents.createStateTransition(document, 'create', {
        identityContractNonce: identityContractNonce + BigInt(1)
      })

      await extension.signer.signAndBroadcast(stateTransition)

      setSubmitResult({ type: 'success', message: 'Article published to blockchain!' })
      setForm({ title: '', content: '', image: '' })
      setFieldErrors({ title: null, content: null, image: null })
      onCreated()
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      setSubmitResult({ type: 'error', message })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = form.title.trim().length > 0 && form.content.trim().length > 0 &&
    fieldErrors.title == null && fieldErrors.content == null && fieldErrors.image == null

  return (
    <section data-testid='create-article' className='rounded-lg border border-gray-200 dark:border-gray-700 p-6 space-y-4'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
        Create Article
      </h2>

      <form onSubmit={(e) => { void handleSubmit(e) }} className='space-y-4'>
        <div>
          <label htmlFor='article-title' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
            Title <span className='text-red-500'>*</span>
          </label>
          <input
            id='article-title'
            type='text'
            placeholder='Article title'
            value={form.title}
            onChange={(e) => handleInputChange('title', e)}
            onBlur={() => handleBlur('title')}
            className='w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue'
          />
          {fieldErrors.title != null && (
            <p className='mt-1 text-xs text-red-500'>{fieldErrors.title}</p>
          )}
        </div>

        <div>
          <label htmlFor='article-content' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
            Content <span className='text-red-500'>*</span>
          </label>
          <textarea
            id='article-content'
            rows={6}
            placeholder='Write your article...'
            value={form.content}
            onChange={(e) => handleInputChange('content', e)}
            onBlur={() => handleBlur('content')}
            className='w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue resize-y'
          />
          <div className='mt-1 flex justify-between'>
            {fieldErrors.content != null
              ? <p className='text-xs text-red-500'>{fieldErrors.content}</p>
              : <span />}
            <span className='text-xs text-gray-400'>{form.content.length}/5120</span>
          </div>
        </div>

        <div>
          <label htmlFor='article-image' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
            Image URL
          </label>
          <input
            id='article-image'
            type='text'
            placeholder='https://example.com/image.png'
            value={form.image}
            onChange={(e) => handleInputChange('image', e)}
            onBlur={() => handleBlur('image')}
            className='w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue'
          />
          {fieldErrors.image != null && (
            <p className='mt-1 text-xs text-red-500'>{fieldErrors.image}</p>
          )}
        </div>

        {submitResult != null && (
          <div
            className={`rounded-lg p-3 text-sm ${
              submitResult.type === 'success'
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
            }`}
          >
            {submitResult.message}
          </div>
        )}

        <button
          type='submit'
          disabled={!isFormValid || isSubmitting}
          className='flex items-center gap-2 rounded-lg bg-primary-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-blue/90 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <Send className='size-4' />
          {isSubmitting ? 'Publishing...' : 'Publish to Blockchain'}
        </button>
      </form>
    </section>
  )
}
