/// <reference types="vitest/config" />
import path from 'node:path'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vite'

const dirname = import.meta.dirname

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/components/**/*.{ts,tsx}', 'src/pages/**/*.{ts,tsx}'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/index.ts'],
    },
    projects: [
      {
        // Plain component/unit tests: jsdom, no browser required.
        // This is the project AppVeyor runs in CI.
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          setupFiles: ['./src/test/setup.ts'],
          include: ['src/**/*.test.{ts,tsx}'],
        },
      },
      {
        // Runs every Storybook story as a Vitest test (via Playwright/Chromium).
        // Local-only teaching example — see README's Storybook learning points.
        // More info: https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
            // Pin host/port: some sandboxes/CI hosts deny listening on the
            // IPv6 loopback (::1) or on arbitrary high ephemeral ports that
            // Vitest's browser server would otherwise pick automatically.
            api: { host: '127.0.0.1', port: 6007 },
          },
        },
      },
    ],
  },
})