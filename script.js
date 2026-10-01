/* Dữ liệu dùng chung cho trang chủ, trang danh mục và trang chi tiết. */
const products = [
  {category:"Nhôm định hình",code:"NH-2020",spec:"20 × 20 mm",name:"Nhôm định hình 2020",desc:"Dùng cho khung máy nhỏ, bàn thao tác, giá đỡ.",image:"images/NH-2020.jpg"},
  {category:"Nhôm định hình",code:"NH-3030",spec:"30 × 30 mm",name:"Nhôm định hình 3030",desc:"Phù hợp khung máy và cơ cấu tự động hóa.",image:"images/NH-3030.jpg"},
  {category:"Nhôm định hình",code:"NH-4040",spec:"40 × 40 mm",name:"Nhôm định hình 4040",desc:"Khung máy, bàn thao tác và giá đỡ.",image:"images/NH-4040.jpg"},
  {category:"Nhôm định hình",code:"NH-4080",spec:"40 × 80 mm",name:"Nhôm định hình 4080",desc:"Kết cấu khung cần độ cứng cao.",image:"images/NH-4080.jpg"},
  {category:"Nhôm định hình",code:"NH-4545",spec:"45 × 45 mm",name:"Nhôm định hình 4545",desc:"Khung máy và thiết bị công nghiệp.",image:"images/NH-4545.jpg"},
  {category:"Nhôm định hình",code:"NH-5050",spec:"50 × 50 mm",name:"Nhôm định hình 5050",desc:"Dùng cho kết cấu máy và bàn thao tác.",image:"images/NH-5050.jpg"},
  {category:"Nhôm định hình",code:"NH-6060",spec:"60 × 60 mm",name:"Nhôm định hình 6060",desc:"Kết cấu khung máy công nghiệp.",image:"images/NH-6060.jpg"},
  {category:"Nhôm định hình",code:"NH-8080",spec:"80 × 80 mm",name:"Nhôm định hình 8080",desc:"Kết cấu lớn, yêu cầu độ cứng cao.",image:"images/NH-8080.jpg"},
  {category:"Nhôm định hình",code:"NH-3060",spec:"30 × 60 mm",name:"Nhôm định hình 3060",desc:"Khung máy và cơ cấu phụ trợ.",image:"images/NH-3060.jpg"},
  {category:"Nhôm định hình",code:"NH-40120",spec:"40 × 120 mm",name:"Nhôm định hình 40120",desc:"Kết cấu máy kích thước lớn.",image:"images/NH-40120.jpg"}
];

const languages = {
  vi:{home:"Trang chủ",products:"Sản phẩm",about:"Giới thiệu",contact:"Liên hệ",search:"Tìm sản phẩm...",heroTitle:"Giải pháp linh kiện cho máy móc & tự động hóa",heroText:"Danh mục sản phẩm dễ mở rộng, tra cứu nhanh và gửi yêu cầu báo giá trực tiếp.",viewProducts:"Xem sản phẩm",catalog:"mã sản phẩm có thể mở rộng",featuredTitle:"Sản phẩm nổi bật",adTitle:"Giải pháp linh kiện sẵn sàng cho đơn hàng của bạn",adText:"Khu vực này dùng để quảng cáo sản phẩm hoặc nhóm hàng chủ lực.",aboutTitle:"Linh kiện tiêu chuẩn hàng công nghiệp",aboutText:"Cung cấp và tư vấn linh kiện cơ khí, nhôm định hình và phụ kiện phục vụ chế tạo máy, tự động hóa và sản xuất.",contactTitle:"Gửi yêu cầu báo giá",contactText:"Chọn sản phẩm rồi liên hệ qua Zalo để trao đổi nhanh."},
  en:{home:"Home",products:"Products",about:"About",contact:"Contact",search:"Search products...",heroTitle:"Components for machinery & automation",heroText:"An expandable product catalog with fast search and direct quotation requests.",viewProducts:"View products",catalog:"expandable product codes",featuredTitle:"Featured products",adTitle:"Industrial components ready for your orders",adText:"Use this area for product or campaign advertising.",aboutTitle:"Standard industrial components",aboutText:"Mechanical components, aluminum profiles and accessories for machine building and automation.",contactTitle:"Request a quotation",contactText:"Choose a product and contact us via Zalo."},
  zh:{home:"首页",products:"产品",about:"关于我们",contact:"联系",search:"搜索产品...",heroTitle:"机械与自动化零部件解决方案",heroText:"产品目录可持续扩展，快速查询并直接提交报价需求。",viewProducts:"查看产品",catalog:"可扩展产品编码",featuredTitle:"热门产品",adTitle:"为您的订单提供工业零部件",adText:"此处可用于产品或活动广告。",aboutTitle:"工业标准零部件",aboutText:"提供机械零部件、工业铝型材及自动化配件。",contactTitle:"提交报价需求",contactText:"选择产品后通过 Zalo 快速沟通。"}
};

const categorySlugs = {
  "nhôm định hình":"nhom-dinh-hinh",
  "bản lề":"ban-le",
  "bánh xe":"banh-xe",
  "chân tăng chỉnh":"chan-tang-chinh",
  "nam châm":"nam-cham",
  "vòng bi":"vong-bi",
  "bu lông & ốc vít":"bu-long-oc-vit"
};
const slugToCategory = Object.fromEntries(Object.entries(categorySlugs).map(([name,slug])=>[slug,name]));
const productUrl = code => `product.html?code=${encodeURIComponent(code)}`;
const categoryUrl = category => `category.html?cat=${encodeURIComponent(categorySlugs[category] || category)}`;
const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const getProductByCode = code => products.find(p => p.code.toLowerCase() === String(code || "").toLowerCase());

function productCard(product) {
  const url = productUrl(product.code);
  return `<article class="product">
    <a class="product-image-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Xem ${escapeHTML(product.name)}">
      <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy" onerror="this.onerror=null;this.src='images/placeholder.svg';">
    </a>
    <div class="product-body">
      <div class="code">${escapeHTML(product.code)}</div>
      <h3><a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHTML(product.name)}</a></h3>
      <p>${escapeHTML(product.spec)}</p><p>${escapeHTML(product.desc)}</p>
      <a class="btn" href="${url}" target="_blank" rel="noopener noreferrer">Xem chi tiết ↗</a>
    </div>
  </article>`;
}

function renderProducts(list = products, targetId = "productGrid") {
  const grid = document.getElementById(targetId);
  if (!grid) return;
  grid.innerHTML = list.map(productCard).join("");
  const empty = document.getElementById("emptyState");
  if (empty) empty.hidden = list.length > 0;
  const count = document.getElementById("resultCount");
  if (count) count.textContent = `${list.length} sản phẩm`;
}

function setupCategories() {
  const select = document.getElementById("category");
  if (!select) return;
  const existing = new Set([...select.options].map(option => option.value));
  [...new Set(products.map(product => product.category))].forEach(category => {
    if (existing.has(category)) return;
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    select.appendChild(option);
  });
}

function filterProducts() {
  const search = (document.getElementById("search")?.value || "").trim().toLocaleLowerCase();
  const category = document.getElementById("category")?.value || "all";
  const currentSlug = new URLSearchParams(location.search).get("cat");
  const categoryFromUrl = slugToCategory[currentSlug] || currentSlug;
  const isCategoryPage = document.body.dataset.page === "category";
  const list = products.filter(product => {
    const matchesSearch = `${product.name} ${product.code} ${product.spec} ${product.desc} ${product.category}`.toLocaleLowerCase().includes(search);
    const matchesSelect = category === "all" || product.category === category;
    const matchesPageCategory = !isCategoryPage || !categoryFromUrl || product.category === categoryFromUrl;
    return matchesSearch && matchesSelect && matchesPageCategory;
  });
  renderProducts(list);
}

function setLanguage(language) {
  const data = languages[language];
  if (!data) return;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (data[key]) element.textContent = data[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (data[key]) element.placeholder = data[key];
  });
  try { localStorage.setItem("language", language); } catch (_) {}
}

function setupCategoryPage() {
  if (document.body.dataset.page !== "category") return;
  const params = new URLSearchParams(location.search);
  const slug = params.get("cat") || "nhom-dinh-hinh";
  const categoryName = slugToCategory[slug] || (products.some(p => p.category === slug) ? slug : "Nhôm định hình");
  const title = document.getElementById("categoryTitle");
  const crumb = document.getElementById("breadcrumbCategory");
  const description = document.getElementById("categoryDescription");
  if (title) title.textContent = categoryName;
  if (crumb) crumb.textContent = categoryName;
  if (description) description.textContent = `Tra cứu mã hàng, kích thước và thông tin thuộc danh mục ${categoryName}.`;
  const select = document.getElementById("category");
  if (select) {
    const option = [...select.options].find(o => o.value === categoryName);
    if (option) select.value = categoryName;
    else select.value = "all";
  }
}

function openImageViewer(src, alt) {
  const dialog = document.getElementById("imageViewer");
  const image = document.getElementById("viewerImage");
  if (!dialog || !image) return;
  image.src = src;
  image.alt = alt || "Ảnh sản phẩm";
  if (typeof dialog.showModal === "function") dialog.showModal();
  else window.open(src, "_blank", "noopener");
}

function setupProductPage() {
  if (document.body.dataset.page !== "product") return;
  const params = new URLSearchParams(location.search);
  const code = params.get("code");
  const product = getProductByCode(code);
  const detail = document.getElementById("productDetail");
  const crumb = document.getElementById("breadcrumbProduct");
  const catLink = document.getElementById("productCategoryLink");
  const back = document.getElementById("backToCategory");
  const related = document.getElementById("relatedGrid");

  if (!product) {
    document.title = "Không tìm thấy sản phẩm | Industrial Parts";
    if (crumb) crumb.textContent = "Không tìm thấy sản phẩm";
    if (detail) detail.innerHTML = `<div class="loading-box"><h2>Không tìm thấy sản phẩm</h2><p>Mã sản phẩm trong đường dẫn không hợp lệ hoặc chưa được thêm vào danh mục.</p><a class="btn btn-primary" href="index.html#featured">Quay lại danh sách sản phẩm</a></div>`;
    if (related) related.innerHTML = products.slice(0,4).map(productCard).join("");
    return;
  }

  document.title = `${product.name} (${product.code}) | Industrial Parts`;
  if (crumb) crumb.textContent = `${product.code} — ${product.name}`;
  const catHref = categoryUrl(product.category);
  if (catLink) { catLink.href = catHref; catLink.textContent = product.category; }
  if (back) back.href = catHref;

  const image = product.image;
  detail.innerHTML = `
    <div class="product-gallery">
      <div class="gallery-main" id="galleryMain" role="button" tabindex="0" aria-label="Phóng to ảnh sản phẩm">
        <img id="mainProductImage" src="${escapeHTML(image)}" alt="${escapeHTML(product.name)}" onerror="this.onerror=null;this.src='images/placeholder.svg';">
      </div>
      <div class="thumbnail-row" aria-label="Ảnh sản phẩm">
        ${[0,1,2,3,4].map((n)=>`<button class="thumbnail ${n===0?'active':''}" type="button" data-image="${escapeHTML(image)}" aria-label="Xem ảnh ${n+1}"><img src="${escapeHTML(image)}" alt="${escapeHTML(product.name)} ảnh ${n+1}" onerror="this.onerror=null;this.src='images/placeholder.svg';"></button>`).join("")}
      </div>
      <p class="section-note">Hiện có một ảnh nguồn cho mã này. Có thể thay các ảnh thu nhỏ bằng ảnh góc khác khi bổ sung hình ảnh.</p>
    </div>
    <div class="product-info">
      <span class="eyebrow">PRODUCT DETAILS</span>
      <div class="product-code">${escapeHTML(product.code)}</div>
      <h1>${escapeHTML(product.name)}</h1>
      <p class="lead">${escapeHTML(product.desc)}</p>
      <table class="spec-table"><tbody>
        <tr><th>Mã sản phẩm</th><td>${escapeHTML(product.code)}</td></tr>
        <tr><th>Danh mục</th><td>${escapeHTML(product.category)}</td></tr>
        <tr><th>Kích thước / quy cách</th><td>${escapeHTML(product.spec)}</td></tr>
        <tr><th>Giá</th><td>Liên hệ báo giá</td></tr>
      </tbody></table>
      <h2>Mô tả sản phẩm</h2><p class="description">${escapeHTML(product.desc)} Vui lòng liên hệ để xác nhận quy cách, số lượng và yêu cầu kỹ thuật trước khi đặt hàng.</p>
      <div class="detail-actions"><a class="btn btn-primary" href="https://zalo.me/SDT-CUA-ANH" target="_blank" rel="noopener noreferrer">Yêu cầu báo giá qua Zalo ↗</a><a class="btn btn-secondary" href="${catHref}">Xem danh mục</a></div>
    </div>`;

  const mainImage = document.getElementById("mainProductImage");
  const galleryMain = document.getElementById("galleryMain");
  if (galleryMain && mainImage) {
    galleryMain.addEventListener("click", () => openImageViewer(mainImage.src, product.name));
    galleryMain.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openImageViewer(mainImage.src, product.name); }
    });
  }
  detail.querySelectorAll(".thumbnail").forEach(button => {
    button.addEventListener("click", () => {
      detail.querySelectorAll(".thumbnail").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      if (mainImage) mainImage.src = button.dataset.image;
    });
  });
  if (related) related.innerHTML = products.filter(p => p.code !== product.code).slice(0,4).map(productCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  setupCategories();
  setupCategoryPage();

  const search = document.getElementById("search");
  const category = document.getElementById("category");
  if (search) search.addEventListener("input", filterProducts);
  if (category) category.addEventListener("change", filterProducts);

  if (document.body.dataset.page === "home") renderProducts(products);
  if (document.body.dataset.page === "category") filterProducts();
  setupProductPage();

  const lang = document.getElementById("lang");
  if (lang) {
    let saved = "vi";
    try { saved = localStorage.getItem("language") || "vi"; } catch (_) {}
    if (!languages[saved]) saved = "vi";
    lang.value = saved;
    setLanguage(saved);
    lang.addEventListener("change", event => setLanguage(event.target.value));
  }

  const viewer = document.getElementById("imageViewer");
  const close = document.getElementById("viewerClose");
  if (close && viewer) close.addEventListener("click", () => viewer.close());
  if (viewer) viewer.addEventListener("click", event => {
    if (event.target === viewer) viewer.close();
  });
});
