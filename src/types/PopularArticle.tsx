export type Article =  Partial<{
    uri: string;
    url: string;
    id: number;
    asset_id: number;
    source: string;
    published_date: string;
    updated: string;
    section: string;
    subsection: string;
    nytdsection: string;
    adx_keywords: string[];
    column: string | null;
    byline: string;
    type: string;
    title: string;
    abstract: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    media: Media[];
    eta_id: number;
}>

interface Media {
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
    approved_for_syndication: number;
    'media-metadata': MediaMetadata[];
}

interface MediaMetadata {
    url: string;
    format: string;
    height: number;
    width: number;
}


export interface ArticleResponse {
    status: string,
    copyright: string,
    num_results: number,
    results: Article[]
}