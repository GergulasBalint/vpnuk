export function generateVPNReviewSchema(review: any) {
  return {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": review.name,
      "image": review.logo,
      "description": review.description,
      "brand": {
        "@type": "Brand",
        "name": review.name
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": review.pricing.biennial,
        "highPrice": review.pricing.monthly,
        "priceCurrency": "USD"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.overall,
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "BestVPNUK"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BestVPNUK",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bestvpnuk.com/logo.png"
      }
    }
  }
}

export function generateArticleSchema(article: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": article.image,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "author": {
      "@type": "Person",
      "name": article.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "BestVPNUK",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bestvpnuk.com/logo.png"
      }
    }
  }
} 