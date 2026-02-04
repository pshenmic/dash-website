import { Button, ThemeProvider } from 'dash-ui-kit/react'

export default function UIKitTestPage() {
  return (
    <ThemeProvider>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">dash-ui-kit Integration Test</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Testing Dash brand design system components
          </p>
        </div>

        {/* Button Variants */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="solid">Solid Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="solid" size="sm">Small</Button>
            <Button variant="solid" size="md">Medium</Button>
            <Button variant="solid" size="xl">Extra Large</Button>
          </div>
        </section>

        {/* Dash Brand Colors Demo */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Dash Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[var(--color-dash-brand)] text-white">
              <div className="font-mono text-sm">dash-brand</div>
              <div className="text-xs opacity-80">#4C7EFF</div>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-dash-mint)] text-gray-900">
              <div className="font-mono text-sm">dash-mint</div>
              <div className="text-xs opacity-80">#60F6D2</div>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-dash-primary-dark-blue)] text-white">
              <div className="font-mono text-sm">dash-primary-dark-blue</div>
              <div className="text-xs opacity-80">#0C1C33</div>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-dash-green)] text-white">
              <div className="font-mono text-sm">dash-green</div>
              <div className="text-xs opacity-80">#40BF40</div>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-dash-red)] text-white">
              <div className="font-mono text-sm">dash-red</div>
              <div className="text-xs opacity-80">#CD2E00</div>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-dash-orange)] text-white">
              <div className="font-mono text-sm">dash-orange</div>
              <div className="text-xs opacity-80">#F98F12</div>
            </div>
          </div>
        </section>

        {/* Interactive States */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Interactive States</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="solid">Hover Me</Button>
            <Button variant="outline">Click Me</Button>
            <Button variant="solid" disabled>Disabled</Button>
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}
