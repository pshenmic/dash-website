import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'

const posData = [
  { service: 'Binance Pay', coins: '40+', physicalPos: true, posApp: true, fees: 'None', ecommerce: true, invoice: 'partial', techSupport: true, fiat: 'Auto' },
  { service: 'CoinPayments', coins: '175', physicalPos: true, posApp: false, fees: '0.50%', ecommerce: true, invoice: true, techSupport: true, fiat: false },
  { service: 'CTX', coins: '1', physicalPos: true, posApp: true, fees: 'None', ecommerce: 'Soon', invoice: false, techSupport: true, fiat: 'Auto (1%)' },
  { service: 'Cyclebit', coins: '13', physicalPos: true, posApp: false, fees: '0.50%', ecommerce: true, invoice: 'partial', techSupport: true, fiat: 'Auto' },
  { service: 'Flexa', coins: '99', physicalPos: true, posApp: true, fees: 'TBC', ecommerce: true, invoice: false, techSupport: true, fiat: 'Auto' },
  { service: 'Salamantex', coins: '7', physicalPos: true, posApp: false, fees: '1.50%', ecommerce: true, invoice: true, techSupport: true, fiat: 'Manual' },
  { service: 'Ultrust', coins: '7', physicalPos: false, posApp: false, fees: '1%', ecommerce: true, invoice: 'partial', techSupport: true, fiat: 'Auto' }
] as const

function StatusIcon ({ value }: { value: boolean | string }): React.ReactNode {
  if (value === true) return <span className='text-green-400'>&#10003;</span>
  if (value === false) return <span className='text-red-400'>&#10007;</span>
  if (value === 'partial') return <span className='text-yellow-400'>&#9675;</span>
  return <span className='text-white/80'>{value}</span>
}

export function POSTable (): React.ReactNode {
  const t = useTranslations('transactions.posTable')

  const headers = ['service', 'coins', 'physicalPos', 'posApp', 'fees', 'ecommerce', 'invoice', 'techSupport', 'fiat'] as const

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-3xl bg-primary-blue p-8 lg:rounded-4xl lg:p-16'>
        <Heading as='h2' size='xl' weight='extrabold' className='mb-8 leading-tight tracking-tight text-white sm:text-3xl sm:leading-9'>
          {t('title')}
        </Heading>

        <div className='-mx-4 overflow-x-auto px-4'>
          <table className='w-full min-w-[700px] text-left text-sm'>
            <thead>
              <tr className='border-b border-white/10'>
                {headers.map((header) => (
                  <th key={header} className='px-3 py-3 text-xs font-semibold whitespace-nowrap text-white/60'>
                    {t(`headers.${header}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {posData.map((row) => (
                <tr key={row.service} className='border-b border-white/5'>
                  <td className='px-3 py-3 font-semibold text-white'>{row.service}</td>
                  <td className='px-3 py-3 text-white/80'>{row.coins}</td>
                  <td className='px-3 py-3 text-center'><StatusIcon value={row.physicalPos} /></td>
                  <td className='px-3 py-3 text-center'><StatusIcon value={row.posApp} /></td>
                  <td className='px-3 py-3 text-white/80'>{row.fees}</td>
                  <td className='px-3 py-3 text-center'><StatusIcon value={row.ecommerce} /></td>
                  <td className='px-3 py-3 text-center'><StatusIcon value={row.invoice} /></td>
                  <td className='px-3 py-3 text-center'><StatusIcon value={row.techSupport} /></td>
                  <td className='px-3 py-3 text-white/80'>{typeof row.fiat === 'string' ? row.fiat : <StatusIcon value={row.fiat} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
