import styles from "./rekomendasi.module.css";
import ProductCard from "../productCard/productCard";

const mockProducts = [
  {
    _id: '6688caea3e5d86252a3012e4',
    name: 'cur solus',
    slug: 'optio-bestia',
    description: 'Illum curiositas thesis apud. Super curriculum solus. Vestrum brevis debilito dapifer aro attonbitus exercitationem.\n' +
      'Conturbo alter balbus clamo unus cervus pecus officiis tenax. Currus crapula magni amiculum dolore teres. Aliqua calculus sustineo conatus alter casus dolores vulnus rem.\n' +
      'Temptatio ubi harum temptatio ventito qui adopto dolorum iste. Veritatis tondeo tremo reprehenderit thorax ut summopere abundans vis. Corrumpo cado hic aliquam vetus vacuus.',
    excerpt: 'Benevolentia tabernus comes vulariter tenetur vinitor.',
    price: 3817945,
    tags: [
      'vehemens',
      'molestias',
      'excepturi'
    ],
    thumbnail: 'https://loremflickr.com/400/400/food',
    images: [
      'https://loremflickr.com/400/400/technics',
      'https://loremflickr.com/400/400/transport',
      'https://loremflickr.com/400/400/animals',
      'https://loremflickr.com/400/400/nature',
      'https://loremflickr.com/400/400/nature'
    ],
    createdAt: '2023-03-14T22:11:36.022Z',
    updatedAt: '2023-04-15T12:00:48.282Z'
  },
  {
    _id: '6688caea3e5d86252a3012e9',
    name: 'auxilium deorsum',
    slug: 'corroboro-itaque-ustulo',
    description: 'Vinitor blanditiis tergum theatrum blandior votum beatus utilis molestiae eaque. Tactus suffragium crinis beatae auctor tutamen appono virga. Tego volubilis concido summisse tabesco velociter.\n' +
      'Articulus conturbo voluptates deprecator toties. Repellendus delectatio ea vinitor tamen cohibeo arbor adduco aequitas cibo. Vindico comitatus cognatus clam modi civitas subiungo ambulo voco alioqui.\n' +
      'Thermae adduco ratione distinctio vir cupio iure claro conculco nesciunt. Traho cohibeo tumultus animi conservo illo coepi. Cresco toties civitas aegrus arcesso arcus conspergo.',
    excerpt: 'Pauci vergo vetus careo.',
    price: 2407998,
    tags: [
      'tantillus',
      'supplanto',
      'suggero'
    ],
    thumbnail: 'https://loremflickr.com/400/400/cats',
    images: [
      'https://loremflickr.com/400/400/nature',
      'https://loremflickr.com/400/400/food',
      'https://loremflickr.com/400/400/transport',
      'https://loremflickr.com/400/400/nature',
      'https://loremflickr.com/400/400/business'
    ],
    createdAt: '2024-10-02T19:17:53.883Z',
    updatedAt: '2023-11-18T10:18:24.971Z'
  },
  {
    _id: '6688caea3e5d86252a3012ea',
    name: 'cunctatio vomica theologus',
    slug: 'vulgaris-depromo',
    description: 'Triumphus thesaurus considero victoria solum admiratio catena aegrotatio denego denuncio. Apud vel auctor adipisci. Considero tardus balbus corrigo.\n' +
      'Architecto convoco cauda cupressus patrocinor modi speciosus vix. Cattus auctus verto tot valeo terminatio vere. Advoco odio attero iusto comparo.',
    excerpt: 'Conicio stabilis terga desolo sub supplanto.',
    price: 8049957,
    tags: [
      'votum',
      'tergiversatio',
      'sursum'
    ],
    thumbnail: 'https://loremflickr.com/400/400/food',
    images: [
      'https://loremflickr.com/400/400/animals',
      'https://loremflickr.com/400/400/animals',
      'https://loremflickr.com/400/400/food',
      'https://loremflickr.com/400/400/sports',
      'https://loremflickr.com/400/400/food'
    ],
    createdAt: '2024-07-21T07:02:11.939Z',
    updatedAt: '2024-10-29T22:56:29.469Z'
  },
  {
    _id: '6688caea3e5d86252a3012e5',
    name: 'iusto paulatim vulnus',
    slug: 'vesica-autus-tremo',
    description: 'Conduco carus valeo baiulus contra vociferor tutamen minus. Tredecim curis turba adsidue aegrus amplitudo tantum abeo cognomen vociferor. Unde strues tepidus neque aranea repellat peccatus laboriosam sursum.\n' +
      'Temperantia brevis adipiscor tenuis tersus decens cimentarius balbus. Arto tabesco comburo dedico. Ciminatio viduo ascisco culpa conitor voveo theatrum valens.',
    excerpt: 'Eaque depereo ab considero.',
    price: 4994389,
    tags: [
      'thorax',
      'ventus',
      'denique'
    ],
    thumbnail: 'https://loremflickr.com/400/400/food',
    images: [
      'https://loremflickr.com/400/400/business',
      'https://loremflickr.com/400/400/food',
      'https://loremflickr.com/400/400/cats',
      'https://loremflickr.com/400/400/animals',
      'https://loremflickr.com/400/400/cats'
    ],
    createdAt: '2024-03-06T23:06:24.089Z',
    updatedAt: '2023-08-19T10:54:26.783Z'
  },
  {
    _id: '6688caea3e5d86252a3012e6',
    name: 'carbo eaque',
    slug: 'alienus-socius-aedificium',
    description: 'Perferendis texo vigilo placeat valeo. Timidus combibo trucido capillus canonicus. Admoneo defungo tantillus tametsi creo voluptates eum coaegresco somnus ulterius.\n' +
      'Vilis triduana accusamus verto conatus admiratio facere assumenda. Architecto tego vulpes solio abstergo debeo adamo cultellus voco deficio. Talis viscus possimus.\n' +
      'Argentum tergo truculenter amplitudo velociter defungo aureus. Dolor sapiente asperiores circumvenio. Sui labore amplitudo derideo torqueo capio subiungo.',
    excerpt: 'Defero desino vallum vorax taceo.',
    price: 4450245,
    tags: [
      'temeritas',
      'caelestis',
      'contigo'
    ],
    thumbnail: 'https://loremflickr.com/400/400/transport',
    images: [
      'https://loremflickr.com/400/400/transport',
      'https://loremflickr.com/400/400/animals',
      'https://loremflickr.com/400/400/abstract',
      'https://loremflickr.com/400/400/business',
      'https://loremflickr.com/400/400/nature'
    ],
    createdAt: '2024-10-28T17:53:45.585Z',
    updatedAt: '2023-09-26T07:41:24.606Z'
  }
];

const Rekomendasi = () => {
  return (
    <div>
      <div className={styles.cardTitle}>Rekomendasi untukmu</div>
      <div className={styles.cardsContainer}>
        {mockProducts.map((product, index) => (
          <ProductCard
            id={product._id}
            slug={product.slug}
            key={index}
            name={product.name}
            excerpt={product.excerpt}
            price={product.price}
            tags={product.tags}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};
export default Rekomendasi;
