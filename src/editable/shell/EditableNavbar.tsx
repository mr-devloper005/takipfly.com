'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, UserPlus, LogIn, X, PlusCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open,setOpen]=useState(false); const {session,logout}=useEditableLocalAuthSession()
  const staticLinks=[['About','/about'],['Contact','/contact']] as const
  return <header className="sticky top-0 z-50 bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)]">
    <div className="mx-auto flex min-h-[104px] max-w-[var(--editable-container)] items-center px-5 sm:px-8 lg:px-[30px]">
      <Link href="/" className="editable-display text-[38px] font-bold tracking-[-.07em] sm:text-[52px]">{SITE_CONFIG.name}</Link>
      <nav className="ml-auto hidden items-center gap-6 lg:flex">
        {staticLinks.map(([label,href])=><Link key={href} href={href} className="text-sm font-medium text-white/70 transition hover:text-white">{label}</Link>)}
        <Link aria-label="Search" href="/search" className="border-l border-white/20 pl-6 text-white/90 transition hover:text-[var(--slot4-accent)]"><Search className="h-5 w-5"/></Link>
        {session ? <><Link href="/create" className="inline-flex items-center gap-2 bg-[var(--slot4-accent)] px-4 py-2.5 text-sm font-semibold"><PlusCircle className="h-4 w-4"/>Submit</Link><button onClick={logout} className="text-sm font-medium text-white/70 hover:text-white">Logout</button></> : <><Link href="/login" className="text-sm font-medium text-white/70 hover:text-white">Sign in</Link><Link href="/signup" className="bg-[var(--slot4-accent)] px-4 py-2.5 text-sm font-semibold">Get started</Link></>}
      </nav>
      <div className="ml-auto flex items-center gap-4 lg:hidden"><Link aria-label="Search" href="/search"><Search className="h-5 w-5"/></Link><button aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X className="h-6 w-6"/>:<Menu className="h-6 w-6"/>}</button></div>
    </div>
    <div className="h-8 overflow-hidden bg-[var(--slot4-accent)]"><div className="flex min-w-max animate-[editable-ticker_28s_linear_infinite] items-center gap-8 whitespace-nowrap px-5 text-xs font-semibold"><span>Explore local expertise</span><span>■</span><span>Find trusted services</span><span>■</span><span>Keep essential references close</span><span>■</span><span>Explore local expertise</span></div></div>
    {open?<div className="border-t border-white/15 px-5 py-5 lg:hidden"><div className="grid gap-4">{staticLinks.map(([label,href])=><Link key={href} onClick={()=>setOpen(false)} href={href} className="text-lg font-medium">{label}</Link>)}<Link href="/search" onClick={()=>setOpen(false)} className="text-lg font-medium">Search</Link>{session?<><Link href="/create" onClick={()=>setOpen(false)} className="text-lg font-medium">Submit</Link><button onClick={logout} className="text-left text-lg font-medium">Logout</button></>:<><Link href="/login" onClick={()=>setOpen(false)} className="text-lg font-medium">Sign in</Link><Link href="/signup" onClick={()=>setOpen(false)} className="text-lg font-medium">Get started</Link></>}</div></div>:null}
  </header>
}
