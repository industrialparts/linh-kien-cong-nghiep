/* =========================================================
   INDUSTRIAL PARTS
   PRODUCT DATA + SEARCH + CATALOG
========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    /* ================= NHÔM ĐỊNH HÌNH ================= */

    {
        category: "Nhôm định hình",
        code: "NH-2020",
        name: "Nhôm định hình 2020",
        spec: "20 × 20 mm",

        specifications: {
            "Mã sản phẩm": "NH-2020",
            "Quy cách": "20 × 20 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Khung máy, bàn thao tác, giá đỡ"
        },

        description:
            "Nhôm định hình 2020 dùng cho khung máy nhỏ, bàn thao tác, giá đỡ và thiết bị tự động hóa."
    },

    {
        category: "Nhôm định hình",
        code: "NH-3030",
        name: "Nhôm định hình 3030",
        spec: "30 × 30 mm",

        specifications: {
            "Mã sản phẩm": "NH-3030",
            "Quy cách": "30 × 30 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Khung máy, bàn thao tác"
        },

        description:
            "Nhôm định hình 3030 phù hợp chế tạo khung máy, bàn thao tác và hệ thống tự động hóa."
    },

    {
        category: "Nhôm định hình",
        code: "NH-4040",
        name: "Nhôm định hình 4040",
        spec: "40 × 40 mm",

        specifications: {
            "Mã sản phẩm": "NH-4040",
            "Quy cách": "40 × 40 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Khung máy và kết cấu"
        },

        description:
            "Nhôm định hình 4040 dùng cho kết cấu khung máy và các thiết bị công nghiệp."
    },

    {
        category: "Nhôm định hình",
        code: "NH-4080",
        name: "Nhôm định hình 4080",
        spec: "40 × 80 mm",

        specifications: {
            "Mã sản phẩm": "NH-4080",
            "Quy cách": "40 × 80 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Khung máy chịu tải"
        },

        description:
            "Nhôm định hình 4080 dùng cho kết cấu máy có yêu cầu độ cứng và khả năng chịu tải cao."
    },

    {
        category: "Nhôm định hình",
        code: "NH-4545",
        name: "Nhôm định hình 4545",
        spec: "45 × 45 mm",

        specifications: {
            "Mã sản phẩm": "NH-4545",
            "Quy cách": "45 × 45 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Khung máy"
        },

        description:
            "Nhôm định hình 4545 sử dụng cho khung máy, bàn thao tác và kết cấu thiết bị."
    },

    {
        category: "Nhôm định hình",
        code: "NH-5050",
        name: "Nhôm định hình 5050",
        spec: "50 × 50 mm",

        specifications: {
            "Mã sản phẩm": "NH-5050",
            "Quy cách": "50 × 50 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Khung máy"
        },

        description:
            "Nhôm định hình 5050 phù hợp các kết cấu máy và khung thiết bị công nghiệp."
    },

    {
        category: "Nhôm định hình",
        code: "NH-6060",
        name: "Nhôm định hình 6060",
        spec: "60 × 60 mm",

        specifications: {
            "Mã sản phẩm": "NH-6060",
            "Quy cách": "60 × 60 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Khung máy chịu tải"
        },

        description:
            "Nhôm định hình 6060 dùng cho kết cấu máy lớn và các ứng dụng yêu cầu độ cứng."
    },

    {
        category: "Nhôm định hình",
        code: "NH-8080",
        name: "Nhôm định hình 8080",
        spec: "80 × 80 mm",

        specifications: {
            "Mã sản phẩm": "NH-8080",
            "Quy cách": "80 × 80 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Khung máy công nghiệp"
        },

        description:
            "Nhôm định hình 8080 dùng cho khung máy công nghiệp và kết cấu chịu tải."
    },

    {
        category: "Nhôm định hình",
        code: "NH-3060",
        name: "Nhôm định hình 3060",
        spec: "30 × 60 mm",

        specifications: {
            "Mã sản phẩm": "NH-3060",
            "Quy cách": "30 × 60 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Khung máy"
        },

        description:
            "Nhôm định hình 3060 dùng cho khung máy, cửa bảo vệ và các kết cấu công nghiệp."
    },

    {
        category: "Nhôm định hình",
        code: "NH-40120",
        name: "Nhôm định hình 40120",
        spec: "40 × 120 mm",

        specifications: {
            "Mã sản phẩm": "NH-40120",
            "Quy cách": "40 × 120 mm",
            "Vật liệu": "Nhôm định hình",
            "Ứng dụng": "Kết cấu máy"
        },

        description:
            "Nhôm định hình 40120 dùng cho các kết cấu máy yêu cầu độ cứng cao."
    },


    /* ================= BẢN LỀ ================= */

    {
        category: "Bản lề",
        code: "BL-01",
        name: "Bản lề công nghiệp",
        spec: "Loại tiêu chuẩn",

        specifications: {
            "Mã sản phẩm": "BL-01",
            "Loại": "Bản lề công nghiệp",
            "Ứng dụng": "Cửa máy, tủ máy"
        },

        description:
            "Bản lề công nghiệp dùng cho cửa máy, tủ điện và các kết cấu cơ khí."
    },

    {
        category: "Bản lề",
        code: "BL-02",
        name: "Bản lề nhôm",
        spec: "Loại nhôm",

        specifications: {
            "Mã sản phẩm": "BL-02",
            "Loại": "Bản lề nhôm",
            "Ứng dụng": "Khung nhôm, cửa máy"
        },

        description:
            "Bản lề nhôm dùng cho khung nhôm định hình và cửa bảo vệ máy."
    },


    /* ================= BÁNH XE ================= */

    {
        category: "Bánh xe",
        code: "BX-50",
        name: "Bánh xe công nghiệp",
        spec: "D50",

        specifications: {
            "Mã sản phẩm": "BX-50",
            "Đường kính": "50 mm",
            "Ứng dụng": "Thiết bị, xe đẩy"
        },

        description:
            "Bánh xe công nghiệp đường kính 50 mm dùng cho xe đẩy và thiết bị."
    },

    {
        category: "Bánh xe",
        code: "BX-75",
        name: "Bánh xe công nghiệp",
        spec: "D75",

        specifications: {
            "Mã sản phẩm": "BX-75",
            "Đường kính": "75 mm",
            "Ứng dụng": "Thiết bị, xe đẩy"
        },

        description:
            "Bánh xe công nghiệp đường kính 75 mm dùng cho thiết bị và xe đẩy."
    },

    {
        category: "Bánh xe",
        code: "BX-100",
        name: "Bánh xe công nghiệp",
        spec: "D100",

        specifications: {
            "Mã sản phẩm": "BX-100",
            "Đường kính": "100 mm",
            "Ứng dụng": "Xe đẩy, thiết bị"
        },

        description:
            "Bánh xe công nghiệp đường kính 100 mm dùng cho xe đẩy và thiết bị công nghiệp."
    },


    /* ================= CHÂN TĂNG CHỈNH ================= */

    {
        category: "Chân tăng chỉnh",
        code: "CTC-M8",
        name: "Chân tăng chỉnh",
        spec: "Ren M8",

        specifications: {
            "Mã sản phẩm": "CTC-M8",
            "Ren": "M8",
            "Ứng dụng": "Máy móc, bàn thao tác"
        },

        description:
            "Chân tăng chỉnh ren M8 dùng cân bằng và điều chỉnh độ cao cho máy móc."
    },

    {
        category: "Chân tăng chỉnh",
        code: "CTC-M10",
        name: "Chân tăng chỉnh",
        spec: "Ren M10",

        specifications: {
            "Mã sản phẩm": "CTC-M10",
            "Ren": "M10",
            "Ứng dụng": "Máy móc, bàn thao tác"
        },

        description:
            "Chân tăng chỉnh ren M10 dùng cho máy móc và bàn thao tác."
    },

    {
        category: "Chân tăng chỉnh",
        code: "CTC-M12",
        name: "Chân tăng chỉnh",
        spec: "Ren M12",

        specifications: {
            "Mã sản phẩm": "CTC-M12",
            "Ren": "M12",
            "Ứng dụng": "Máy móc, thiết bị"
        },

        description:
            "Chân tăng chỉnh ren M12 dùng cho máy móc và các thiết bị công nghiệp."
    },


    /* ================= NAM CHÂM ================= */

    {
        category: "Nam châm",
        code: "NC-D20",
        name: "Nam châm tròn",
        spec: "D20",

        specifications: {
            "Mã sản phẩm": "NC-D20",
            "Đường kính": "20 mm",
            "Loại": "Nam châm tròn"
        },

        description:
            "Nam châm tròn D20 sử dụng trong các cơ cấu gá, giữ và định vị."
    },

    {
        category: "Nam châm",
        code: "NC-D30",
        name: "Nam châm tròn",
        spec: "D30",

        specifications: {
            "Mã sản phẩm": "NC-D30",
            "Đường kính": "30 mm",
            "Loại": "Nam châm tròn"
        },

        description:
            "Nam châm tròn D30 dùng trong cơ cấu gá và các thiết bị công nghiệp."
    },


    /* ================= VÒNG BI ================= */

    {
        category: "Vòng bi",
        code: "BB-6000",
        name: "Vòng bi",
        spec: "6000",

        specifications: {
            "Mã sản phẩm": "BB-6000",
            "Model": "6000",
            "Loại": "Vòng bi rãnh sâu"
        },

        description:
            "Vòng bi 6000 dùng trong nhiều loại máy móc và thiết bị cơ khí."
    },

    {
        category: "Vòng bi",
        code: "BB-6001",
        name: "Vòng bi",
        spec: "6001",

        specifications: {
            "Mã sản phẩm": "BB-6001",
            "Model": "6001",
            "Loại": "Vòng bi rãnh sâu"
        },

        description:
            "Vòng bi 6001 sử dụng trong các thiết bị và cơ cấu quay."
    },

    {
        category: "Vòng bi",
        code: "BB-6200",
        name: "Vòng bi",
        spec: "6200",

        specifications: {
            "Mã sản phẩm": "BB-6200",
            "Model": "6200",
            "Loại": "Vòng bi rãnh sâu"
        },

        description:
            "Vòng bi 6200 dùng cho máy móc và cơ cấu truyền động."
    },


    /* ================= BU LÔNG ================= */

    {
        category: "Bu lông & ốc vít",
        code: "BL-M6",
        name: "Bu lông lục giác",
        spec: "M6",

        specifications: {
            "Mã sản phẩm": "BL-M6",
            "Ren": "M6",
            "Loại": "Bu lông lục giác"
        },

        description:
            "Bu lông lục giác M6 dùng trong lắp ráp cơ khí và thiết bị."
    },

    {
        category: "Bu lông & ốc vít",
        code: "BL-M8",
        name: "Bu lông lục giác",
        spec: "M8",

        specifications: {
            "Mã sản phẩm": "BL-M8",
            "Ren": "M8",
            "Loại": "Bu lông lục giác"
        },

        description:
            "Bu lông lục giác M8 dùng trong lắp ráp cơ khí và kết cấu máy."
    },

    {
        category: "Bu lông & ốc vít",
        code: "BL-M10",
        name: "Bu lông lục giác",
        spec: "M10",

        specifications: {
            "Mã sản phẩm": "BL-M10",
            "Ren": "M10",
            "Loại": "Bu lông lục giác"
        },

        description:
            "Bu lông lục giác M10 dùng trong lắp ráp cơ khí và thiết bị công nghiệp."
    }

];


/* =========================================================
   CATEGORY DATA
========================================================= */

const categoryIcons = {

    "Nhôm định hình": "▦",
    "Bản lề": "◈",
    "Bánh xe": "◉",
    "Chân tăng chỉnh": "⌗",
    "Nam châm": "◆",
    "Vòng bi": "◎",
    "Bu lông & ốc vít": "⌁"

};


const categoryDescriptions = {

    "Nhôm định hình":
        "Nhôm định hình và phụ kiện dùng cho khung máy, bàn thao tác và tự động hóa.",

    "Bản lề":
        "Bản lề công nghiệp cho cửa máy, tủ máy và khung nhôm.",

    "Bánh xe":
        "Bánh xe công nghiệp dùng cho xe đẩy, thiết bị và máy móc.",

    "Chân tăng chỉnh":
        "Chân tăng chỉnh dùng cân bằng và điều chỉnh độ cao máy.",

    "Nam châm":
        "Nam châm và linh kiện từ tính cho cơ cấu gá và định vị.",

    "Vòng bi":
        "Các loại vòng bi sử dụng trong máy móc và cơ cấu quay.",

    "Bu lông & ốc vít":
        "Bu lông, ốc vít và phụ kiện liên kết cơ khí."

};


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let currentCategory = "";
let currentProduct = null;

let currentImageIndex = 0;
let viewerImages = [];


/* =========================================================
   IMAGE
========================================================= */

function getProductImages(code) {

    return [
        `images/${code}-1.jpg`,
        `images/${code}-2.jpg`,
        `images/${code}-3.jpg`,
        `images/${code}-4.jpg`,
        `images/${code}-5.jpg`
    ];

}


/* =========================================================
   IMAGE EXIST CHECK
========================================================= */

function imageExists(url) {

    return new Promise(resolve => {

        const img = new Image();

        img.onload = () => resolve(true);

        img.onerror = () => resolve(false);

        img.src = url;

    });

}


/* =========================================================
   CREATE CATEGORIES
========================================================= */

function createCategories() {

    const grid = document.getElementById("category-grid");

    if (!grid) return;

    const categories = [
        ...new Set(products.map(product => product.category))
    ];

    grid.innerHTML = categories.map(category => {

        const count =
            products.filter(
                product => product.category === category
            ).length;

        return `

            <div
                class="category-card"
                onclick="showProducts('${escapeAttribute(category)}')">

                <div class="category-icon">
                    ${categoryIcons[category] || "◼"}
                </div>

                <h3>
                    ${category}
                </h3>

                <p>
                    ${categoryDescriptions[category] || ""}
                </p>

                <span class="category-arrow">
                    ${count} sản phẩm →
                </span>

            </div>

        `;

    }).join("");

    const countElement =
        document.getElementById("product-count");

    if (countElement) {

        countElement.textContent =
            `${products.length} sản phẩm`;

    }

}


/* =========================================================
   SHOW HOME
========================================================= */

function showHome() {

    currentCategory = "";
    currentProduct = null;

    document.getElementById("product-list-section").style.display =
        "none";

    document.getElementById("product-detail-section").style.display =
        "none";

    document.getElementById("category-grid").style.display =
        "grid";

    clearSearch();

    history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    closeMobileMenu();

}


/* =========================================================
   SHOW CATEGORIES
========================================================= */

function showCategories() {

    currentCategory = "";
    currentProduct = null;

    document.getElementById("product-list-section").style.display =
        "none";

    document.getElementById("product-detail-section").style.display =
        "none";

    document.getElementById("category-grid").style.display =
        "grid";

    document.getElementById("product-list").innerHTML = "";

    document.getElementById("product-category-title").textContent =
        "";

    document.getElementById("product-category-description").textContent =
        "";

    document.getElementById("category-search").value =
        "";

    history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
    );

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   SHOW PRODUCTS
========================================================= */

function showProducts(category, updateHash = true) {

    currentCategory = category;

    currentProduct = null;

    const categoryProducts =
        products.filter(
            product => product.category === category
        );

    document.getElementById("category-grid").style.display =
        "none";

    document.getElementById("product-detail-section").style.display =
        "none";

    document.getElementById("product-list-section").style.display =
        "block";

    document.getElementById("product-category-title").textContent =
        category;

    document.getElementById("product-category-description").textContent =
        categoryDescriptions[category] || "";

    document.getElementById("category-product-count").textContent =
        `${categoryProducts.length} sản phẩm`;

    document.getElementById("category-search").value =
        "";

    renderProductList(categoryProducts);

    if (updateHash) {

        history.replaceState(
            null,
            "",
            `#category=${encodeURIComponent(category)}`
        );

    }

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   RENDER PRODUCT LIST
========================================================= */

async function renderProductList(list) {

    const grid =
        document.getElementById("product-list");

    if (!grid) return;

    if (!list.length) {

        grid.innerHTML = `
            <div class="empty-products">
                Không tìm thấy sản phẩm.
            </div>
        `;

        return;
    }

    grid.innerHTML = list.map(product => {

        const images =
            getProductImages(product.code);

        return `

            <article
                class="product-card"
                onclick="showProductDetail('${product.code}')">

                <img
                    class="product-card-image"
                    src="${images[0]}"
                    alt="${product.code}"
                    onerror="this.style.visibility='hidden'">

                <div class="product-card-body">

                    <div class="product-code">
                        ${product.code}
                    </div>

                    <div class="product-name">
                        ${product.name}
                    </div>

                    <div class="product-spec">
                        ${product.spec}
                    </div>

                    <div class="product-card-link">
                        Xem chi tiết →
                    </div>

                </div>

            </article>

        `;

    }).join("");

}


/* =========================================================
   FILTER CATEGORY
========================================================= */

function filterCategoryProducts(keyword) {

    const text =
        normalizeText(keyword);

    const list =
        products.filter(product => {

            if (product.category !== currentCategory) {
                return false;
            }

            const searchText = normalizeText(
                [
                    product.code,
                    product.name,
                    product.spec,
                    product.description,
                    ...Object.values(product.specifications || {})
                ].join(" ")
            );

            return searchText.includes(text);

        });

    document.getElementById("category-product-count").textContent =
        `${list.length} sản phẩm`;

    renderProductList(list);

}


/* =========================================================
   SEARCH PRODUCTS
========================================================= */

function searchProducts(keyword) {

    const input =
        document.getElementById("product-search");

    const results =
        document.getElementById("search-results");

    const clearButton =
        document.getElementById("search-clear");

    const text =
        normalizeText(keyword);

    clearButton.style.display =
        text ? "block" : "none";

    if (!text) {

        results.innerHTML = "";

        return;

    }


    const matched =
        products.filter(product => {

            const searchText =
                normalizeText(
                    [
                        product.code,
                        product.name,
                        product.spec,
                        product.category,
                        product.description,
                        ...Object.values(
                            product.specifications || {}
                        )
                    ].join(" ")
                );

            return searchText.includes(text);

        });


    if (!matched.length) {

        results.innerHTML = `
            <div class="search-no-result">
                Không tìm thấy sản phẩm phù hợp với
                "<strong>${escapeHtml(keyword)}</strong>".
            </div>
        `;

        return;
    }


    const limited =
        matched.slice(0, 10);


    results.innerHTML = `

        <div class="search-result-box">

            ${limited.map(product => {

                const image =
                    getProductImages(product.code)[0];

                return `

                    <div
                        class="search-result-item"
                        onclick="showProductDetail('${product.code}')">

                        <img
                            class="search-result-image"
                            src="${image}"
                            alt="${product.code}"
                            onerror="this.style.visibility='hidden'">

                        <div>

                            <div class="search-result-code">
                                ${product.code}
                            </div>

                            <div class="search-result-name">
                                ${product.name}
                                · ${product.spec}
                            </div>

                            <div class="search-result-name">
                                ${product.category}
                            </div>

                        </div>

                    </div>

                `;

            }).join("")}

        </div>

    `;

}


/* =========================================================
   CLEAR SEARCH
========================================================= */

function clearSearch() {

    const input =
        document.getElementById("product-search");

    const results =
        document.getElementById("search-results");

    const clearButton =
        document.getElementById("search-clear");

    if (input) input.value = "";

    if (results) results.innerHTML = "";

    if (clearButton) clearButton.style.display = "none";

}


/* =========================================================
   PRODUCT DETAIL
========================================================= */

function showProductDetail(code, updateHash = true) {

    const product =
        products.find(
            item => item.code === code
        );

    if (!product) return;

    currentProduct = product;

    currentCategory = product.category;

    currentImageIndex = 0;

    const images =
        getProductImages(product.code);

    viewerImages = images;


    document.getElementById("category-grid").style.display =
        "none";

    document.getElementById("product-list-section").style.display =
        "none";

    document.getElementById("product-detail-section").style.display =
        "block";


    const detail =
        document.getElementById("product-detail");


    const specifications =
        Object.entries(
            product.specifications || {}
        );


    detail.innerHTML = `

        <div class="product-detail">

            <div class="detail-top">


                <!-- GALLERY -->

                <div class="product-gallery">

                    <div class="main-image-wrap">

                        <img
                            id="main-product-image"
                            class="main-product-image"
                            src="${images[0]}"
                            alt="${product.code}"
                            onclick="openImageViewer(0)"
                            onerror="handleMissingMainImage(this)">

                        <button
                            type="button"
                            class="gallery-prev"
                            onclick="changeMainImage(-1)">
                            ‹
                        </button>

                        <button
                            type="button"
                            class="gallery-next"
                            onclick="changeMainImage(1)">
                            ›
                        </button>

                    </div>


                    <div class="product-thumbnails">

                        ${images.map((image, index) => `

                            <button
                                type="button"
                                class="product-thumbnail ${index === 0 ? "active" : ""}"
                                onclick="selectProductImage(${index})">

                                <img
                                    src="${image}"
                                    alt="${product.code} - ${index + 1}"
                                    onerror="this.parentElement.style.display='none'">

                            </button>

                        `).join("")}

                    </div>

                </div>


                <!-- PRODUCT INFORMATION -->

                <div class="detail-info">

                    <span class="section-label">
                        PRODUCT
                    </span>

                    <h1>
                        ${product.name}
                    </h1>

                    <div class="detail-code">
                        Mã sản phẩm:
                        <strong>${product.code}</strong>
                    </div>

                    <div class="detail-description">
                        ${product.description}
                    </div>


                    <h3 class="spec-title">
                        Thông số kỹ thuật
                    </h3>

                    <table class="spec-table">

                        <tbody>

                            ${specifications.map(
                                ([key, value]) => `
                                    <tr>
                                        <th>${key}</th>
                                        <td>${value}</td>
                                    </tr>
                                `
                            ).join("")}

                        </tbody>

                    </table>


                    <div class="detail-contact">

                        <a
                            class="detail-zalo"
                            href="https://zalo.me/0358854410"
                            target="_blank"
                            rel="noopener">
                            💬 Liên hệ Zalo
                        </a>

                        <button
                            type="button"
                            class="detail-request"
                            onclick="fillContact('${product.code}')">
                            Yêu cầu báo giá
                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;


    if (updateHash) {

        history.replaceState(
            null,
            "",
            `#product=${encodeURIComponent(product.code)}`
        );

    }


    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   IMAGE FUNCTIONS
========================================================= */

function selectProductImage(index) {

    if (!currentProduct) return;

    const images =
        getProductImages(currentProduct.code);

    currentImageIndex =
        index;

    const main =
        document.getElementById("main-product-image");

    if (main) {

        main.src =
            images[index];

    }


    document
        .querySelectorAll(".product-thumbnail")
        .forEach((thumb, i) => {

            thumb.classList.toggle(
                "active",
                i === index
            );

        });

}


function changeMainImage(direction) {

    if (!currentProduct) return;

    const images =
        getProductImages(currentProduct.code);

    let next =
        currentImageIndex + direction;

    if (next < 0) {
        next = images.length - 1;
    }

    if (next >= images.length) {
        next = 0;
    }

    selectProductImage(next);

}


/* =========================================================
   IMAGE VIEWER
========================================================= */

function openImageViewer(index) {

    if (!currentProduct) return;

    viewerImages =
        getProductImages(currentProduct.code);

    currentImageIndex =
        index;

    updateImageViewer();

    document
        .getElementById("image-viewer")
        .classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function updateImageViewer() {

    const image =
        document.getElementById("viewer-image");

    const counter =
        document.getElementById("image-viewer-counter");

    if (!image) return;

    image.src =
        viewerImages[currentImageIndex];

    counter.textContent =
        `${currentImageIndex + 1} / ${viewerImages.length}`;

}


function changeViewerImage(direction) {

    if (!viewerImages.length) return;

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex =
            viewerImages.length - 1;
    }

    if (currentImageIndex >= viewerImages.length) {
        currentImageIndex = 0;
    }

    updateImageViewer();

}


function closeImageViewer(event) {

    if (
        event &&
        event.target &&
        event.target.id !== "image-viewer"
    ) {
        return;
    }

    document
        .getElementById("image-viewer")
        .classList.remove("show");

    document.body.style.overflow =
        "";

}


/* =========================================================
   BACK
========================================================= */

function goBackToCategory() {

    if (currentCategory) {

        showProducts(
            currentCategory
        );

    } else {

        showCategories();

    }

}


/* =========================================================
   CONTACT
========================================================= */

function fillContact(code) {

    const product =
        products.find(
            item => item.code === code
        );

    if (!product) return;


    const message =
        document.getElementById("message");

    if (message) {

        message.value =
            `Tôi muốn hỏi giá sản phẩm ${product.code} - ${product.name}.\n\nSố lượng: `;

    }


    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });


    setTimeout(() => {

        message.focus();

    }, 500);

}


/* =========================================================
   SEND MESSAGE
========================================================= */

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone || !message) {

        alert(
            "Vui lòng nhập đầy đủ thông tin."
        );

        return false;

    }


    const zaloMessage =
        `Xin chào, tôi là ${name}.\n\n` +
        `Số điện thoại: ${phone}\n\n` +
        `Nội dung:\n${message}`;


    const zaloUrl =
        `https://zalo.me/0358854410`;


    alert(
        "Thông tin đã được ghi nhận. Vui lòng liên hệ Zalo để gửi yêu cầu."
    );


    window.open(
        zaloUrl,
        "_blank"
    );


    return false;

}


/* =========================================================
   SCROLL
========================================================= */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

    closeMobileMenu();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const nav =
        document.getElementById("main-nav");

    nav.classList.toggle("show");

}


function closeMobileMenu() {

    const nav =
        document.getElementById("main-nav");

    if (nav) {

        nav.classList.remove("show");

    }

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const viewer =
            document.getElementById("image-viewer");

        if (
            viewer &&
            viewer.classList.contains("show")
        ) {

            if (event.key === "Escape") {

                closeImageViewer();

            }

            if (event.key === "ArrowLeft") {

                changeViewerImage(-1);

            }

            if (event.key === "ArrowRight") {

                changeViewerImage(1);

            }

        }

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT" &&
            document.activeElement.tagName !== "TEXTAREA"
        ) {

            event.preventDefault();

            const search =
                document.getElementById("product-search");

            if (search) {

                search.focus();

            }

        }

    }
);


/* =========================================================
   HASH / F5
========================================================= */

function loadFromHash() {

    const hash =
        window.location.hash;


    if (!hash) {

        showHome();

        return;

    }


    if (hash.startsWith("#product=")) {

        const code =
            decodeURIComponent(
                hash.substring(9)
            );

        const product =
            products.find(
                item => item.code === code
            );

        if (product) {

            showProductDetail(
                code,
                false
            );

            return;

        }

    }


    if (hash.startsWith("#category=")) {

        const category =
            decodeURIComponent(
                hash.substring(10)
            );

        const exists =
            products.some(
                item => item.category === category
            );

        if (exists) {

            showProducts(
                category,
                false
            );

            return;

        }

    }


    showHome();

}


/* =========================================================
   UTILITIES
========================================================= */

function normalizeText(text) {

    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d");

}


function escapeHtml(text) {

    return String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(text) {

    return String(text || "")
        .replace(/'/g, "\\'");
}


function handleMissingMainImage(image) {

    image.style.display =
        "none";

}


/* =========================================================
   CLOSE SEARCH WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const searchArea =
            document.querySelector(".search-container");

        const results =
            document.getElementById("search-results");

        if (
            searchArea &&
            results &&
            !searchArea.contains(event.target)
        ) {

            results.innerHTML = "";

        }

    }
);


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createCategories();

        loadFromHash();

    }
);
