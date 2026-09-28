const products = [

    {
        category: "Nhôm định hình",
        code: "NH-2020",
        spec: "20 × 20 mm",
        name: "Nhôm định hình 2020",
        desc: "Dùng cho khung máy nhỏ, bàn thao tác, giá đỡ.",
        image: "images/NH-2020.jpg"
    },

    {
        category: "Nhôm định hình",
        code: "NH-3030",
        spec: "30 × 30 mm",
        name: "Nhôm định hình 3030",
        desc: "Phù hợp khung máy và cơ cấu tự động hóa.",
        image: "images/NH-3030.jpg"
    },

    {
        category: "Nhôm định hình",
        code: "NH-4040",
        spec: "40 × 40 mm",
        name: "Nhôm định hình 4040",
        desc: "Khung máy, bàn thao tác và giá đỡ.",
        image: "images/NH-4040.jpg"
    },

    {
        category: "Nhôm định hình",
        code: "NH-4080",
        spec: "40 × 80 mm",
        name: "Nhôm định hình 4080",
        desc: "Kết cấu khung cần độ cứng cao.",
        image: "images/NH-4080.jpg"
    },

    {
        category: "Nhôm định hình",
        code: "NH-4545",
        spec: "45 × 45 mm",
        name: "Nhôm định hình 4545",
        desc: "Khung máy và thiết bị công nghiệp.",
        image: "images/NH-4545.jpg"
    },

    {
        category: "Nhôm định hình",
        code: "NH-5050",
        spec: "50 × 50 mm",
        name: "Nhôm định hình 5050",
        desc: "Dùng cho kết cấu máy và bàn thao tác.",
        image: "images/NH-5050.jpg"
    },

    {
        category: "Nhôm định hình",
        code: "NH-6060",
        spec: "60 × 60 mm",
        name: "Nhôm định hình 6060",
        desc: "Kết cấu khung máy công nghiệp.",
        image: "images/NH-6060.jpg"
    },

    {
        category: "Nhôm định hình",
        code: "NH-8080",
        spec: "80 × 80 mm",
        name: "Nhôm định hình 8080",
        desc: "Kết cấu lớn, yêu cầu độ cứng cao.",
        image: "images/NH-8080.jpg"
    },

    {
        category: "Nhôm định hình",
        code: "NH-3060",
        spec: "30 × 60 mm",
        name: "Nhôm định hình 3060",
        desc: "Khung máy và cơ cấu phụ trợ.",
        image: "images/NH-3060.jpg"
    },

    {
        category: "Nhôm định hình",
        code: "NH-40120",
        spec: "40 × 120 mm",
        name: "Nhôm định hình 40120",
        desc: "Kết cấu máy kích thước lớn.",
        image: "images/NH-40120.jpg"
    }

];


const languages = {

    vi: {
        home: "Trang chủ",
        products: "Sản phẩm",
        about: "Giới thiệu",
        contact: "Liên hệ",
        search: "Tìm sản phẩm...",
        heroTitle:
            "Giải pháp linh kiện cho máy móc & tự động hóa",
        heroText:
            "Danh mục sản phẩm dễ mở rộng, tra cứu nhanh và gửi yêu cầu báo giá trực tiếp.",
        viewProducts: "Xem sản phẩm",
        catalog: "mã sản phẩm có thể mở rộng",
        featuredTitle: "Sản phẩm nổi bật",
        adTitle:
            "Giải pháp linh kiện sẵn sàng cho đơn hàng của bạn",
        adText:
            "Khu vực này dùng để quảng cáo sản phẩm hoặc nhóm hàng chủ lực.",
        aboutTitle:
            "Linh kiện tiêu chuẩn hàng công nghiệp",
        aboutText:
            "Cung cấp và tư vấn linh kiện cơ khí, nhôm định hình và phụ kiện phục vụ chế tạo máy, tự động hóa và sản xuất.",
        contactTitle:
            "Gửi yêu cầu báo giá",
        contactText:
            "Chọn sản phẩm rồi liên hệ qua Zalo để trao đổi nhanh."
    },

    en: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        search: "Search products...",
        heroTitle:
            "Components for machinery & automation",
        heroText:
            "An expandable product catalog with fast search and direct quotation requests.",
        viewProducts: "View products",
        catalog: "expandable product codes",
        featuredTitle: "Featured products",
        adTitle:
            "Industrial components ready for your orders",
        adText:
            "Use this area for product or campaign advertising.",
        aboutTitle:
            "Standard industrial components",
        aboutText:
            "Mechanical components, aluminum profiles and accessories for machine building and automation.",
        contactTitle:
            "Request a quotation",
        contactText:
            "Choose a product and contact us via Zalo."
    },

    zh: {
        home: "首页",
        products: "产品",
        about: "关于我们",
        contact: "联系",
        search: "搜索产品...",
        heroTitle:
            "机械与自动化零部件解决方案",
        heroText:
            "产品目录可持续扩展，快速查询并直接提交报价需求。",
        viewProducts: "查看产品",
        catalog: "可扩展产品编码",
        featuredTitle: "热门产品",
        adTitle:
            "为您的订单提供工业零部件",
        adText:
            "此处可用于产品或活动广告。",
        aboutTitle:
            "工业标准零部件",
        aboutText:
            "提供机械零部件、工业铝型材及自动化配件。",
        contactTitle:
            "提交报价需求",
        contactText:
            "选择产品后通过 Zalo 快速沟通。"
    }

};


function renderProducts(list = products) {

    const grid =
        document.querySelector("#productGrid");

    if (!grid) return;


    grid.innerHTML = list.map(product => `

        <article class="product">

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="this.src='images/placeholder.svg'"
            >

            <div class="product-body">

                <div class="code">
                    ${product.code}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.spec}
                </p>

                <a
                    class="btn"
                    href="product.html?code=${encodeURIComponent(product.code)}"
                >
                    Xem chi tiết
                </a>

            </div>

        </article>

    `).join("");

}


function setupCategories() {

    const select =
        document.querySelector("#category");

    if (!select) return;


    const categories =
        [...new Set(
            products.map(product => product.category)
        )];


    categories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;

        option.textContent = category;

        select.appendChild(option);

    });

}


function filterProducts() {

    const search =
        (
            document.querySelector("#search")?.value
            || ""
        ).toLowerCase();


    const category =
        document.querySelector("#category")?.value
        || "all";


    const result =
        products.filter(product => {

            const text =
                `${product.name}
                ${product.code}
                ${product.spec}`.toLowerCase();


            return (

                (category === "all"
                    || product.category === category)

                &&

                text.includes(search)

            );

        });


    renderProducts(result);

}


function setLanguage(language) {

    const data =
        languages[language];

    if (!data) return;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (data[key]) {

                element.textContent =
                    data[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;

            if (data[key]) {

                element.placeholder =
                    data[key];

            }

        });


    localStorage.setItem(
        "language",
        language
    );

}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupCategories();

        renderProducts();


        const search =
            document.querySelector("#search");

        const category =
            document.querySelector("#category");

        if (search) {

            search.addEventListener(
                "input",
                filterProducts
            );

        }


        if (category) {

            category.addEventListener(
                "change",
                filterProducts
            );

        }


        const lang =
            document.querySelector("#lang");


        if (lang) {

            const saved =
                localStorage.getItem("language")
                || "vi";


            lang.value = saved;

            setLanguage(saved);


            lang.addEventListener(
                "change",
                event => {

                    setLanguage(
                        event.target.value
                    );

                }
            );

        }

    }
);
