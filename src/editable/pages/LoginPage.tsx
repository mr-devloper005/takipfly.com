import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
export async function generateMetadata():Promise<Metadata>{return buildPageMetadata({path:'/login',title:'Sign in',description:pagesContent.auth.login.metadataDescription})}
export default function LoginPage(){return <EditableSiteShell><main className="min-h-[70vh] bg-[var(--slot4-dark-bg)] text-white"><section className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-[30px] lg:py-[120px]"><div><p className="editable-mono text-[10px] text-[var(--slot4-accent)]">{pagesContent.auth.login.badge}</p><h1 className="editable-display mt-4 text-5xl font-bold leading-[.95] tracking-[-.07em] sm:text-7xl">Welcome back to the desk.</h1><p className="mt-6 max-w-md text-lg leading-8 text-white/65">{pagesContent.auth.login.description}</p></div><div className="bg-[var(--slot4-surface-bg)] p-7 text-[var(--slot4-page-text)] sm:p-10"><h2 className="editable-display text-3xl font-bold tracking-[-.05em]">{pagesContent.auth.login.formTitle}</h2><EditableLocalLoginForm/><p className="mt-6 text-sm text-[var(--slot4-muted-text)]">New here? <Link href="/signup" className="font-semibold text-[var(--slot4-accent)]">{pagesContent.auth.login.createCta}</Link></p></div></section></main></EditableSiteShell>}
