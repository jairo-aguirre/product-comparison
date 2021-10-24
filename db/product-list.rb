#require 'rest-client'
require 'json'
require'uri'

products = [{"id"=>22835981, "name"=>"Nike Running Kelly Anna Air Zoom Pegasus 38 sneakers in multi", "price"=>{"current"=>{"value"=>130.0, "text"=>"$130.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>60430192, "brandName"=>"Nike Running", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>1904765, "productType"=>"Product", "url"=>"nike-running/nike-running-kelly-anna-air-zoom-pegasus-38-sneakers-in-multi/prd/22835981?colourwayid=60430192", "imageUrl"=>"images.asos-media.com/products/nike-running-kelly-anna-air-zoom-pegasus-38-sneakers-in-multi/22835981-1-multi", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200758293, "name"=>"Reebok workout plus sneakers in white with gum sole", "price"=>{"current"=>{"value"=>80.0, "text"=>"$80.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200758297, "brandName"=>"Reebok", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>105637003, "productType"=>"Product", "url"=>"reebok/reebok-workout-plus-sneakers-in-white-with-gum-sole/prd/200758293?colourwayid=200758297", "imageUrl"=>"images.asos-media.com/products/reebok-workout-plus-sneakers-in-white-with-gum-sole/200758293-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200352327, "name"=>"ASOS DESIGN sneakers in black oil slick with chunky sole", "price"=>{"current"=>{"value"=>58.0, "text"=>"$58.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200352329, "brandName"=>"ASOS DESIGN", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>103309555, "productType"=>"Product", "url"=>"asos-design/asos-design-sneakers-in-black-oil-slick-with-chunky-sole/prd/200352327?colourwayid=200352329", "imageUrl"=>"images.asos-media.com/products/asos-design-sneakers-in-black-oil-slick-with-chunky-sole/200352327-1-multi", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200456108, "name"=>"Converse Chuck Taylor All Star Hi Berkshire Boot faux-leather sneaker boots in cedar bark", "price"=>{"current"=>{"value"=>85.0, "text"=>"$85.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200456109, "brandName"=>"Converse", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104003518, "productType"=>"Product", "url"=>"converse/converse-chuck-taylor-all-star-hi-berkshire-boot-faux-leather-sneaker-boots-in-cedar-bark/prd/200456108?colourwayid=200456109", "imageUrl"=>"images.asos-media.com/products/converse-chuck-taylor-all-star-hi-berkshire-boot-faux-leather-sneaker-boots-in-cedar-bark/200456108-1-brown", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200457601, "name"=>"Converse Chuck 70 Hi canvas sneakers in dark moss", "price"=>{"current"=>{"value"=>85.0, "text"=>"$85.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200457603, "brandName"=>"Converse", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104003529, "productType"=>"Product", "url"=>"converse/converse-chuck-70-hi-canvas-sneakers-in-dark-moss/prd/200457601?colourwayid=200457603", "imageUrl"=>"images.asos-media.com/products/converse-chuck-70-hi-canvas-sneakers-in-dark-moss/200457601-1-khaki", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200461684, "name"=>"Puma Leadcat Sliders In Black", "price"=>{"current"=>{"value"=>27.0, "text"=>"$27.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200461685, "brandName"=>"Puma", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104244111, "productType"=>"Product", "url"=>"puma/puma-leadcat-sliders-in-black/prd/200461684?colourwayid=200461685", "imageUrl"=>"images.asos-media.com/products/puma-leadcat-sliders-in-black/200461684-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200461793, "name"=>"Puma Leadcat Sliders In White", "price"=>{"current"=>{"value"=>25.0, "text"=>"$25.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200461794, "brandName"=>"Puma", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104244112, "productType"=>"Product", "url"=>"puma/puma-leadcat-sliders-in-white/prd/200461793?colourwayid=200461794", "imageUrl"=>"images.asos-media.com/products/puma-leadcat-sliders-in-white/200461793-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200568201, "name"=>"Clarks Originals wallabee boots in black suede", "price"=>{"current"=>{"value"=>170.0, "text"=>"$170.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200568203, "brandName"=>"Clarks Originals", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>103443480, "productType"=>"Product", "url"=>"clarks-originals/clarks-originals-wallabee-boots-in-black-suede/prd/200568201?colourwayid=200568203", "imageUrl"=>"images.asos-media.com/products/clarks-originals-wallabee-boots-in-black-suede/200568201-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200568430, "name"=>"Clarks Originals wallabee boots in beeswax leather", "price"=>{"current"=>{"value"=>170.0, "text"=>"$170.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200568446, "brandName"=>"Clarks Originals", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>103443483, "productType"=>"Product", "url"=>"clarks-originals/clarks-originals-wallabee-boots-in-beeswax-leather/prd/200568430?colourwayid=200568446", "imageUrl"=>"images.asos-media.com/products/clarks-originals-wallabee-boots-in-beeswax-leather/200568430-1-brown", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200714129, "name"=>"Vans Old Skool Stacked tumbled leather sneakers in purple", "price"=>{"current"=>{"value"=>90.0, "text"=>"$90.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200714134, "brandName"=>"Vans", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>105402420, "productType"=>"Product", "url"=>"vans/vans-old-skool-stacked-tumbled-leather-sneakers-in-purple/prd/200714129?colourwayid=200714134", "imageUrl"=>"images.asos-media.com/products/vans-old-skool-stacked-tumbled-leather-sneakers-in-purple/200714129-1-green", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200987718, "name"=>"adidas Originals NMD_R1 sneakers in black and white", "price"=>{"current"=>{"value"=>140.0, "text"=>"$140.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200987719, "brandName"=>"adidas Originals", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>108483836, "productType"=>"Product", "url"=>"adidas-originals/adidas-originals-nmdr1-sneakers-in-black-and-white/prd/200987718?colourwayid=200987719", "imageUrl"=>"images.asos-media.com/products/adidas-originals-nmdr1-sneakers-in-black-and-white/200987718-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>23842748, "name"=>"Puma Future Rider Twofold sneakers in black and white", "price"=>{"current"=>{"value"=>84.0, "text"=>"$84.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>60516932, "brandName"=>"Puma", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>1985434, "productType"=>"Product", "url"=>"puma/puma-future-rider-twofold-sneakers-in-black-and-white/prd/23842748?colourwayid=60516932", "imageUrl"=>"images.asos-media.com/products/puma-future-rider-twofold-sneakers-in-black-and-white/23842748-1-pumablackpumawhit", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>23843228, "name"=>"Puma Future Rider Pride in white and rainbow", "price"=>{"current"=>{"value"=>84.0, "text"=>"$84.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>60516963, "brandName"=>"Puma", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>1985480, "productType"=>"Product", "url"=>"puma/puma-future-rider-pride-in-white-and-rainbow/prd/23843228?colourwayid=60516963", "imageUrl"=>"images.asos-media.com/products/puma-future-rider-pride-in-white-and-rainbow/23843228-1-whitemulti", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200462470, "name"=>"ASOS DESIGN sneakers with quilting in white", "price"=>{"current"=>{"value"=>33.0, "text"=>"$33.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200462508, "brandName"=>"ASOS DESIGN", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104263343, "productType"=>"Product", "url"=>"asos-design/asos-design-sneakers-with-quilting-in-white/prd/200462470?colourwayid=200462508", "imageUrl"=>"images.asos-media.com/products/asos-design-sneakers-with-quilting-in-white/200462470-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200568045, "name"=>"Clarks Originals desert trek in black suede", "price"=>{"current"=>{"value"=>150.0, "text"=>"$150.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200568046, "brandName"=>"Clarks Originals", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>103443475, "productType"=>"Product", "url"=>"clarks-originals/clarks-originals-desert-trek-in-black-suede/prd/200568045?colourwayid=200568046", "imageUrl"=>"images.asos-media.com/products/clarks-originals-desert-trek-in-black-suede/200568045-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200568084, "name"=>"Clarks Originals wallabee shoes in tan suede", "price"=>{"current"=>{"value"=>160.0, "text"=>"$160.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200568093, "brandName"=>"Clarks Originals", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>103443477, "productType"=>"Product", "url"=>"clarks-originals/clarks-originals-wallabee-shoes-in-tan-suede/prd/200568084?colourwayid=200568093", "imageUrl"=>"images.asos-media.com/products/clarks-originals-wallabee-shoes-in-tan-suede/200568084-1-tan", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200568129, "name"=>"Clarks Originals Desert Rock in Sand Suede", "price"=>{"current"=>{"value"=>155.0, "text"=>"$155.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200568142, "brandName"=>"Clarks Originals", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>103443478, "productType"=>"Product", "url"=>"clarks-originals/clarks-originals-desert-rock-in-sand-suede/prd/200568129?colourwayid=200568142", "imageUrl"=>"images.asos-media.com/products/clarks-originals-desert-rock-in-sand-suede/200568129-1-beige", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200568382, "name"=>"Clarks Originals wallabee shoes in camo", "price"=>{"current"=>{"value"=>170.0, "text"=>"$170.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200568383, "brandName"=>"Clarks Originals", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>103443482, "productType"=>"Product", "url"=>"clarks-originals/clarks-originals-wallabee-shoes-in-camo/prd/200568382?colourwayid=200568383", "imageUrl"=>"images.asos-media.com/products/clarks-originals-wallabee-shoes-in-camo/200568382-1-cream", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200615819, "name"=>"Vans Old Skool Heavy Textures sneakers in golden brown", "price"=>{"current"=>{"value"=>65.0, "text"=>"$65.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200615820, "brandName"=>"Vans", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>105033568, "productType"=>"Product", "url"=>"vans/vans-old-skool-heavy-textures-sneakers-in-golden-brown/prd/200615819?colourwayid=200615820", "imageUrl"=>"images.asos-media.com/products/vans-old-skool-heavy-textures-sneakers-in-golden-brown/200615819-1-goldenbrown", "videoUrl"=>nil, "isSellingFast"=>true}, {"id"=>200616153, "name"=>"Vans Old Skool suede sneakers in navy", "price"=>{"current"=>{"value"=>75.0, "text"=>"$75.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200616162, "brandName"=>"Vans", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>105033590, "productType"=>"Product", "url"=>"vans/vans-old-skool-suede-sneakers-in-navy/prd/200616153?colourwayid=200616162", "imageUrl"=>"images.asos-media.com/products/vans-old-skool-suede-sneakers-in-navy/200616153-1-navy", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200794329, "name"=>"Kappa slides in black", "price"=>{"current"=>{"value"=>35.0, "text"=>"$35.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200794330, "brandName"=>"Kappa", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>106088464, "productType"=>"Product", "url"=>"kappa/kappa-slides-in-black/prd/200794329?colourwayid=200794330", "imageUrl"=>"images.asos-media.com/products/kappa-slides-in-black/200794329-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200936338, "name"=>"Timberland Richmond Ridge 6 Inch boots in wheat tan", "price"=>{"current"=>{"value"=>160.0, "text"=>"$160.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200936339, "brandName"=>"Timberland", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>108049113, "productType"=>"Product", "url"=>"timberland/timberland-richmond-ridge-6-inch-boots-in-wheat-tan/prd/200936338?colourwayid=200936339", "imageUrl"=>"images.asos-media.com/products/timberland-richmond-ridge-6-inch-boots-in-wheat-tan/200936338-1-wheattan", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200936420, "name"=>"Tommy Hilfiger x Timberland hiker boots in black", "price"=>{"current"=>{"value"=>250.0, "text"=>"$250.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200936421, "brandName"=>"Timberland", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>108049117, "productType"=>"Product", "url"=>"timberland/tommy-hilfiger-x-timberland-hiker-boots-in-black/prd/200936420?colourwayid=200936421", "imageUrl"=>"images.asos-media.com/products/tommy-hilfiger-x-timberland-hiker-boots-in-black/200936420-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>201051469, "name"=>"Jack & Jones faux suede slippers in tan", "price"=>{"current"=>{"value"=>27.0, "text"=>"$27.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>201051470, "brandName"=>"Jack & Jones", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>109228377, "productType"=>"Product", "url"=>"jack-jones/jack-jones-faux-suede-slippers-in-tan/prd/201051469?colourwayid=201051470", "imageUrl"=>"images.asos-media.com/products/jack-jones-faux-suede-slippers-in-tan/201051469-1-almond", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>22820234, "name"=>"Walk London Oliver derby shoes in black etched leather", "price"=>{"current"=>{"value"=>102.7, "text"=>"$102.70"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>60428803, "brandName"=>"WALK LONDON", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>1903575, "productType"=>"Product", "url"=>"walk-london/walk-london-oliver-derby-shoes-in-black-etched-leather/prd/22820234?colourwayid=60428803", "imageUrl"=>"images.asos-media.com/products/walk-london-oliver-derby-shoes-in-black-etched-leather/22820234-1-brown", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>23179882, "name"=>"ASOS DESIGN flip flop in navy", "price"=>{"current"=>{"value"=>9.0, "text"=>"$9.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>60457123, "brandName"=>"ASOS DESIGN", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>1930757, "productType"=>"Product", "url"=>"asos-design/asos-design-flip-flop-in-navy/prd/23179882?colourwayid=60457123", "imageUrl"=>"images.asos-media.com/products/asos-design-flip-flop-in-navy/23179882-1-navy", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>23959193, "name"=>"Tommy Hilfiger knit runner sneakers with small flag logo in black", "price"=>{"current"=>{"value"=>124.5, "text"=>"$124.50"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>60526857, "brandName"=>"Tommy Hilfiger", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>1995306, "productType"=>"Product", "url"=>"tommy-hilfiger/tommy-hilfiger-knit-runner-sneakers-with-small-flag-logo-in-black/prd/23959193?colourwayid=60526857", "imageUrl"=>"images.asos-media.com/products/tommy-hilfiger-knit-runner-sneakers-with-small-flag-logo-in-black/23959193-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>23959827, "name"=>"Tommy Hilfiger corporate leather cupsole with side flag logo in black", "price"=>{"current"=>{"value"=>119.5, "text"=>"$119.50"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>60526892, "brandName"=>"Tommy Hilfiger", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>1995340, "productType"=>"Product", "url"=>"tommy-hilfiger/tommy-hilfiger-corporate-leather-cupsole-with-side-flag-logo-in-black/prd/23959827?colourwayid=60526892", "imageUrl"=>"images.asos-media.com/products/tommy-hilfiger-corporate-leather-cupsole-with-side-flag-logo-in-black/23959827-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>23962245, "name"=>"Tommy Hilfiger corporate leather cupsole with side flag logo in white", "price"=>{"current"=>{"value"=>119.5, "text"=>"$119.50"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>60527034, "brandName"=>"Tommy Hilfiger", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>1994250, "productType"=>"Product", "url"=>"tommy-hilfiger/tommy-hilfiger-corporate-leather-cupsole-with-side-flag-logo-in-white/prd/23962245?colourwayid=60527034", "imageUrl"=>"images.asos-media.com/products/tommy-hilfiger-corporate-leather-cupsole-with-side-flag-logo-in-white/23962245-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>24244725, "name"=>"River Island woven tassle loafer in black", "price"=>{"current"=>{"value"=>100.0, "text"=>"$100.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>60551114, "brandName"=>"River Island", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>2019189, "productType"=>"Product", "url"=>"river-island/river-island-woven-tassle-loafer-in-black/prd/24244725?colourwayid=60551114", "imageUrl"=>"images.asos-media.com/products/river-island-woven-tassle-loafer-in-black/24244725-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>11783310, "name"=>"Nike Running Pegasus Turbo trainers in yellow", "price"=>{"current"=>{"value"=>253.0, "text"=>"$253.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>16331073, "brandName"=>"Nike Running", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>1436662, "productType"=>"Product", "url"=>"nike-running/nike-running-pegasus-turbo-trainers-in-yellow/prd/11783310?colourwayid=16331073", "imageUrl"=>"images.asos-media.com/products/nike-running-pegasus-turbo-trainers-in-yellow/11783310-1-yellow", "videoUrl"=>"video.asos-media.com/products/nike-running-pegasus-turbo-trainers-in-yellow/11783310-catwalk-AVS", "isSellingFast"=>false}, {"id"=>200225797, "name"=>"Bershka Color Block Sneaker", "price"=>{"current"=>{"value"=>85.0, "text"=>"$85.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200225799, "brandName"=>"Bershka", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>101910082, "productType"=>"Product", "url"=>"bershka/bershka-color-block-sneaker/prd/200225797?colourwayid=200225799", "imageUrl"=>"images.asos-media.com/products/bershka-color-block-sneaker/200225797-1-multi", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200479190, "name"=>"Pull&Bear sneakers with green back tab in white", "price"=>{"current"=>{"value"=>33.0, "text"=>"$33.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200479191, "brandName"=>"Pull&Bear", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104503692, "productType"=>"Product", "url"=>"pullbear/pullbear-sneakers-with-green-back-tab-in-white/prd/200479190?colourwayid=200479191", "imageUrl"=>"images.asos-media.com/products/pullbear-sneakers-with-green-back-tab-in-white/200479190-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200479509, "name"=>"Pull&Bear mesh runner sneakers in black Exclusive at ASOS", "price"=>{"current"=>{"value"=>66.0, "text"=>"$66.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200479510, "brandName"=>"Pull&Bear", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104513441, "productType"=>"Product", "url"=>"pullbear/pullbear-mesh-runner-sneakers-in-black-exclusive-at-asos/prd/200479509?colourwayid=200479510", "imageUrl"=>"images.asos-media.com/products/pullbear-mesh-runner-sneakers-in-black-exclusive-at-asos/200479509-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200479814, "name"=>"Pull&Bear retro sneakers with rubber sole in white", "price"=>{"current"=>{"value"=>50.0, "text"=>"$50.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200479815, "brandName"=>"Pull&Bear", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104503947, "productType"=>"Product", "url"=>"pullbear/pullbear-retro-sneakers-with-rubber-sole-in-white/prd/200479814?colourwayid=200479815", "imageUrl"=>"images.asos-media.com/products/pullbear-retro-sneakers-with-rubber-sole-in-white/200479814-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200500489, "name"=>"Bershka sneakers with contrast back panel in white", "price"=>{"current"=>{"value"=>43.0, "text"=>"$43.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200500490, "brandName"=>"Bershka", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104678487, "productType"=>"Product", "url"=>"bershka/bershka-sneakers-with-contrast-back-panel-in-white/prd/200500489?colourwayid=200500490", "imageUrl"=>"images.asos-media.com/products/bershka-sneakers-with-contrast-back-panel-in-white/200500489-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200500650, "name"=>"Bershka sneakers in black with silver contrast", "price"=>{"current"=>{"value"=>50.0, "text"=>"$50.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200500651, "brandName"=>"Bershka", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104678564, "productType"=>"Product", "url"=>"bershka/bershka-sneakers-in-black-with-silver-contrast/prd/200500650?colourwayid=200500651", "imageUrl"=>"images.asos-media.com/products/bershka-sneakers-in-black-with-silver-contrast/200500650-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200500713, "name"=>"Pull&Bear chunky sneakers with black back tab in white", "price"=>{"current"=>{"value"=>50.0, "text"=>"$50.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200500715, "brandName"=>"Pull&Bear", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104678591, "productType"=>"Product", "url"=>"pullbear/pullbear-chunky-sneakers-with-black-back-tab-in-white/prd/200500713?colourwayid=200500715", "imageUrl"=>"images.asos-media.com/products/pullbear-chunky-sneakers-with-black-back-tab-in-white/200500713-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200501541, "name"=>"Bershka sandals with straps in black", "price"=>{"current"=>{"value"=>43.0, "text"=>"$43.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200501542, "brandName"=>"Bershka", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>104679386, "productType"=>"Product", "url"=>"bershka/bershka-sandals-with-straps-in-black/prd/200501541?colourwayid=200501542", "imageUrl"=>"images.asos-media.com/products/bershka-sandals-with-straps-in-black/200501541-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200629002, "name"=>"Pull&Bear sandal in white", "price"=>{"current"=>{"value"=>26.0, "text"=>"$26.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200629015, "brandName"=>"Pull&Bear", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>105355886, "productType"=>"Product", "url"=>"pullbear/pullbear-sandal-in-white/prd/200629002?colourwayid=200629015", "imageUrl"=>"images.asos-media.com/products/pullbear-sandal-in-white/200629002-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200776833, "name"=>"Bershka Color Block Sneaker", "price"=>{"current"=>{"value"=>79.0, "text"=>"$79.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200776834, "brandName"=>"Bershka", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>105778376, "productType"=>"Product", "url"=>"bershka/bershka-color-block-sneaker/prd/200776833?colourwayid=200776834", "imageUrl"=>"images.asos-media.com/products/bershka-color-block-sneaker/200776833-1-multi", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200776937, "name"=>"Pull&Bear sneakers in white with gray contrast Exclusive at ASOS", "price"=>{"current"=>{"value"=>48.0, "text"=>"$48.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200776938, "brandName"=>"Pull&Bear", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>105778548, "productType"=>"Product", "url"=>"pullbear/pullbear-sneakers-in-white-with-gray-contrast-exclusive-at-asos/prd/200776937?colourwayid=200776938", "imageUrl"=>"images.asos-media.com/products/pullbear-sneakers-in-white-with-gray-contrast-exclusive-at-asos/200776937-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200777118, "name"=>"Bershka chunky sneakers in white with blue detailing", "price"=>{"current"=>{"value"=>66.0, "text"=>"$66.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200777119, "brandName"=>"Bershka", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>105788379, "productType"=>"Product", "url"=>"bershka/bershka-chunky-sneakers-in-white-with-blue-detailing/prd/200777118?colourwayid=200777119", "imageUrl"=>"images.asos-media.com/products/bershka-chunky-sneakers-in-white-with-blue-detailing/200777118-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200921184, "name"=>"Bershka sneakers with tie dye in white", "price"=>{"current"=>{"value"=>53.0, "text"=>"$53.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200921185, "brandName"=>"Bershka", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>107663573, "productType"=>"Product", "url"=>"bershka/bershka-sneakers-with-tie-dye-in-white/prd/200921184?colourwayid=200921185", "imageUrl"=>"images.asos-media.com/products/bershka-sneakers-with-tie-dye-in-white/200921184-1-white", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200935981, "name"=>"Timberland 6-inch premium rubber cup boots in black with camo", "price"=>{"current"=>{"value"=>198.0, "text"=>"$198.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200935991, "brandName"=>"Timberland", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>108049097, "productType"=>"Product", "url"=>"timberland/timberland-6-inch-premium-rubber-cup-boots-in-black-with-camo/prd/200935981?colourwayid=200935991", "imageUrl"=>"images.asos-media.com/products/timberland-6-inch-premium-rubber-cup-boots-in-black-with-camo/200935981-1-darkgreen", "videoUrl"=>nil, "isSellingFast"=>true}, {"id"=>200936204, "name"=>"Timberland Redwood Falls moc toe boots in wheat tan", "price"=>{"current"=>{"value"=>145.0, "text"=>"$145.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200936207, "brandName"=>"Timberland", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>108049108, "productType"=>"Product", "url"=>"timberland/timberland-redwood-falls-moc-toe-boots-in-wheat-tan/prd/200936204?colourwayid=200936207", "imageUrl"=>"images.asos-media.com/products/timberland-redwood-falls-moc-toe-boots-in-wheat-tan/200936204-1-wheattan", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>200936222, "name"=>"Timberland Redwood Falls Moc Toe boots in black full grain", "price"=>{"current"=>{"value"=>145.0, "text"=>"$145.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>200936224, "brandName"=>"Timberland", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>108049109, "productType"=>"Product", "url"=>"timberland/timberland-redwood-falls-moc-toe-boots-in-black-full-grain/prd/200936222?colourwayid=200936224", "imageUrl"=>"images.asos-media.com/products/timberland-redwood-falls-moc-toe-boots-in-black-full-grain/200936222-1-black", "videoUrl"=>nil, "isSellingFast"=>false}, {"id"=>201051441, "name"=>"Jack & Jones faux-suede slippers in black", "price"=>{"current"=>{"value"=>27.0, "text"=>"$27.00"}, "previous"=>{"value"=>nil, "text"=>""}, "rrp"=>{"value"=>nil, "text"=>""}, "isMarkedDown"=>false, "isOutletPrice"=>false, "currency"=>"USD"}, "colour"=>"", "colourWayId"=>201051442, "brandName"=>"Jack & Jones", "hasVariantColours"=>false, "hasMultiplePrices"=>false, "groupId"=>nil, "productCode"=>109228376, "productType"=>"Product", "url"=>"jack-jones/jack-jones-faux-suede-slippers-in-black/prd/201051441?colourwayid=201051442", "imageUrl"=>"images.asos-media.com/products/jack-jones-faux-suede-slippers-in-black/201051441-1-anthracite", "videoUrl"=>nil, "isSellingFast"=>false}]

productIds = []

products.each do |product|
  productIds.push(product["id"])
end





url = "https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US"

rm = RestClient.get(
  url,  
headers={
  'x-rapidapi-host': 'asos2.p.rapidapi.com',
  'x-rapidapi-key': '85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b'
})

rm_array = (JSON.parse(rm))

#parsed_array = JSON.parse(rm_array)



File.open("category-list.rb", "w"){ |f| f.write rm_array }
