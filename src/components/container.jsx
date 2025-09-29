import { clsx } from 'clsx'

export function Container({ className, children }) {
  return (
    <div className={clsx(className, 'px-6 lg:px-10')}>
      <div className="mx-auto max-w-2xl lg:max-w-full">{children}</div>
    </div>
  )
}
