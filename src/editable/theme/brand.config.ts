import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
export const slot4BrandConfig = { siteName: siteIdentity.name, tagline: siteIdentity.tagline, domain: siteIdentity.domain, baseUrl: siteIdentity.url, productKind: getProductKind(recipe), ogImage: siteIdentity.ogImage, accents: { primary: '#dd4536', surface: '#fff8f0' } } as const
