import { useTranslations } from 'next-intl'

const posData = [
  { service: 'Binance Pay', coins: '40+', physicalPos: true, posApp: true, fees: 'None', ecommerce: true, invoice: 'partial', techSupport: true, fiat: 'Auto' },
  { service: 'CoinPayments', coins: '175', physicalPos: true, posApp: false, fees: '0.50%', ecommerce: true, invoice: true, techSupport: true, fiat: false },
  { service: 'CTX', coins: '1', physicalPos: true, posApp: true, fees: 'None', ecommerce: 'Coming Soon', invoice: false, techSupport: true, fiat: 'Auto (1% fee)' },
  { service: 'Cyclebit', coins: '13', physicalPos: true, posApp: false, fees: '0.50%', ecommerce: true, invoice: 'partial', techSupport: true, fiat: 'Auto' },
  { service: 'Flexa', coins: '99', physicalPos: true, posApp: true, fees: 'TBC', ecommerce: true, invoice: false, techSupport: true, fiat: 'Auto' },
  { service: 'Salamantex', coins: '7', physicalPos: true, posApp: false, fees: '1.50%', ecommerce: true, invoice: true, techSupport: true, fiat: 'Manual' },
  { service: 'Ultrust', coins: '7', physicalPos: false, posApp: false, fees: '1%', ecommerce: true, invoice: 'partial', techSupport: true, fiat: 'Auto' }
] as const

function StatusIcon ({ value }: { value: boolean | string }): React.ReactNode {
  if (value === true) {
    return (
      <span className='inline-flex size-6 items-center justify-center rounded-full bg-primary-blue'>
        <svg width='12' height='10' viewBox='0 0 12 10' fill='none'>
          <path d='M1 5L4.5 8.5L11 1.5' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className='inline-flex size-6 items-center justify-center rounded-full bg-[#CD2E00] shadow-[inset_0_0_12px_rgba(12,28,51,0.12)]'>
        <svg width='8' height='8' viewBox='0 0 8 8' fill='none'>
          <path d='M1 1L7 7M7 1L1 7' stroke='white' strokeWidth='1.5' strokeLinecap='round' />
        </svg>
      </span>
    )
  }
  if (value === 'partial') {
    return (
      <span className='inline-flex size-6 rounded-full bg-primary-dark/5 shadow-[inset_0_0_12px_rgba(12,28,51,0.12)] dark:bg-white/10' />
    )
  }
  return <span className='text-[13px] font-medium text-primary-dark dark:text-white'>{value}</span>
}

export function POSTable (): React.ReactNode {
  const t = useTranslations('transactions.posTable')

  const headers = ['service', 'coins', 'physicalPos', 'posApp', 'fees', 'ecommerce', 'invoice', 'techSupport', 'fiat'] as const

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mb-8 flex flex-col gap-1.25'>
        <span className='text-lg font-extrabold text-primary-blue'>{t('subtitle')}</span>
        <h2 className='text-[32px] font-extrabold leading-8.5 text-primary-dark dark:text-white'>
          {t('title')}
        </h2>
      </div>

      <div className='overflow-hidden rounded-t-[24px] rounded-b-[12px] border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
        <div className='overflow-x-auto'>
          <table className='w-full min-w-[900px] text-left text-[13px]'>
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header} className='px-6 py-4 font-extrabold whitespace-nowrap text-primary-dark/35 dark:text-white/35'>
                    {t(`headers.${header}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {posData.map((row, index) => (
                <tr key={row.service} className={index % 2 === 0 ? 'bg-primary-dark/5 dark:bg-white/5' : ''}>
                  <td className='px-6 py-4 font-extrabold text-primary-dark dark:text-white'>{row.service}</td>
                  <td className='px-6 py-4 font-medium text-center text-primary-dark dark:text-white'>{row.coins}</td>
                  <td className='px-6 py-4 text-center'><StatusIcon value={row.physicalPos} /></td>
                  <td className='px-6 py-4 text-center'><StatusIcon value={row.posApp} /></td>
                  <td className='px-6 py-4 font-medium text-center text-primary-dark dark:text-white'>{row.fees}</td>
                  <td className='px-6 py-4 text-center'><StatusIcon value={row.ecommerce} /></td>
                  <td className='px-6 py-4 text-center'><StatusIcon value={row.invoice} /></td>
                  <td className='px-6 py-4 text-center'><StatusIcon value={row.techSupport} /></td>
                  <td className='px-6 py-4 font-medium text-center text-primary-dark dark:text-white'>
                    {typeof row.fiat === 'string' ? row.fiat : <StatusIcon value={row.fiat} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
