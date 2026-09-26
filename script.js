/* =========================================================
   WEBSITE LINH KIỆN CÔNG NGHIỆP
   SCRIPT.JS - PHIÊN BẢN TRANG CHI TIẾT SẢN PHẨM
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Khung máy, bàn thao tác, giá đỡ, thiết bị tự động hóa"
        },

        description: `
            Nhôm định hình 2020 là loại nhôm định hình kích thước nhỏ,
            được sử dụng phổ biến trong chế tạo khung máy, bàn thao tác,
            giá đỡ, vách bảo vệ và các thiết bị tự động hóa.

            Sản phẩm có thiết kế dạng rãnh giúp dễ dàng lắp ghép với
            ke góc, bulông, đai ốc và các phụ kiện nhôm định hình.

            Nhôm có trọng lượng nhẹ, độ bền tốt, dễ gia công và có thể
            tháo lắp hoặc thay đổi kết cấu khi cần thiết.

            Phù hợp cho các ứng dụng cơ khí, tự động hóa và chế tạo
            thiết bị công nghiệp.
        `
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Khung máy, bàn thao tác, giá đỡ, kết cấu lắp ráp"
        },

        description: `
            Nhôm định hình 3030 dùng cho khung máy, bàn thao tác,
            giá đỡ và các kết cấu lắp ráp công nghiệp.

            Thiết kế rãnh giúp việc lắp đặt phụ kiện thuận tiện và
            có thể thay đổi kết cấu nhanh chóng.
        `
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Khung máy, bàn thao tác, băng tải, thiết bị công nghiệp"
        },

        description: `
            Nhôm định hình 4040 là loại nhôm phổ biến trong chế tạo
            khung máy và các thiết bị công nghiệp.

            Sản phẩm có độ cứng tốt, dễ lắp ghép và phù hợp với nhiều
            loại phụ kiện nhôm định hình.
        `
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Khung máy, băng tải, kết cấu chịu lực"
        },

        description: `
            Nhôm định hình 4080 có tiết diện lớn, phù hợp với các
            kết cấu máy yêu cầu độ cứng cao.

            Sản phẩm thường được sử dụng làm khung máy, băng tải,
            chân máy và kết cấu chịu lực.
        `
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Khung máy, bàn thao tác, vách máy, giá đỡ"
        },

        description: `
            Nhôm định hình 4545 được sử dụng cho các kết cấu máy
            công nghiệp, bàn thao tác và vách bảo vệ thiết bị.
        `
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Khung máy, bàn thao tác, giá đỡ"
        },

        description: `
            Nhôm định hình 5050 phù hợp với các kết cấu máy,
            bàn thao tác, giá đỡ và hệ thống tự động hóa.
        `
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Khung máy lớn, bàn thao tác, băng tải"
        },

        description: `
            Nhôm định hình 6060 dùng cho khung máy lớn và các kết cấu
            công nghiệp yêu cầu độ cứng tốt.
        `
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Kết cấu máy lớn, khung chịu lực"
        },

        description: `
            Nhôm định hình 8080 có tiết diện lớn, thích hợp cho
            các kết cấu máy lớn và ứng dụng cần độ cứng cao.
        `
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Khung máy, giá đỡ, băng tải, vách bảo vệ"
        },

        description: `
            Nhôm định hình 3060 được sử dụng trong chế tạo khung máy,
            giá đỡ, băng tải và vách bảo vệ thiết bị.
        `
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
            "Bề mặt": "Anodized",
            "Màu sắc": "Bạc",
            "Chiều dài": "Theo yêu cầu",
            "Ứng dụng": "Kết cấu máy lớn, khung chịu lực, băng tải"
        },

        description: `
            Nhôm định hình 40120 phù hợp với kết cấu máy lớn,
            khung chịu lực và các hệ thống tự động hóa.
        `
    },


    /* ================= BẢN LỀ ================= */

    {
        category: "Bản lề",
        code: "BL-01",
        name: "Bản lề tủ máy",

        spec: "Bản lề công nghiệp",

        specifications: {
            "Mã sản phẩm": "BL-01",
            "Loại": "Bản lề tủ máy",
            "Vật liệu": "Kim loại",
            "Ứng dụng": "Tủ điện, tủ máy, thiết bị công nghiệp"
        },

        description: `
            Bản lề dùng cho tủ điện, tủ máy và các thiết bị công nghiệp.
            Thiết kế chắc chắn, thuận tiện cho việc đóng mở cửa tủ.
        `
    },

    {
        category: "Bản lề",
        code: "BL-02",
        name: "Bản lề nhôm",

        spec: "Bản lề khung nhôm",

        specifications: {
            "Mã sản phẩm": "BL-02",
            "Loại": "Bản lề nhôm",
            "Ứng dụng": "Khung nhôm định hình, cửa bảo vệ máy"
        },

        description: `
            Bản lề sử dụng cho khung nhôm định hình và cửa bảo vệ máy.
        `
    },


    /* ================= BÁNH XE ================= */

    {
        category: "Bánh xe",
        code: "BX-50",
        name: "Bánh xe công nghiệp D50",

        spec: "D50 mm",

        specifications: {
            "Mã sản phẩm": "BX-50",
            "Đường kính": "50 mm",
            "Loại": "Bánh xe công nghiệp",
            "Ứng dụng": "Bàn thao tác, xe đẩy, thiết bị"
        },

        description: `
            Bánh xe công nghiệp D50 dùng cho bàn thao tác,
            xe đẩy và các thiết bị sản xuất.
        `
    },

    {
        category: "Bánh xe",
        code: "BX-75",
        name: "Bánh xe công nghiệp D75",

        spec: "D75 mm",

        specifications: {
            "Mã sản phẩm": "BX-75",
            "Đường kính": "75 mm",
            "Loại": "Bánh xe công nghiệp",
            "Ứng dụng": "Xe đẩy, thiết bị sản xuất"
        },

        description: `
            Bánh xe công nghiệp D75 phù hợp cho xe đẩy và
            các thiết bị sản xuất.
        `
    },

    {
        category: "Bánh xe",
        code: "BX-100",
        name: "Bánh xe công nghiệp D100",

        spec: "D100 mm",

        specifications: {
            "Mã sản phẩm": "BX-100",
            "Đường kính": "100 mm",
            "Loại": "Bánh xe công nghiệp"
        },

        description: `
            Bánh xe công nghiệp kích thước D100 mm dùng cho
            các thiết bị và xe đẩy công nghiệp.
        `
    },


    /* ================= CHÂN TĂNG CHỈNH ================= */

    {
        category: "Chân tăng chỉnh",
        code: "CTC-M8",
        name: "Chân tăng chỉnh M8",

        spec: "Ren M8",

        specifications: {
            "Mã sản phẩm": "CTC-M8",
            "Ren": "M8",
            "Loại": "Chân tăng chỉnh",
            "Ứng dụng": "Bàn máy, khung máy, thiết bị công nghiệp"
        },

        description: `
            Chân tăng chỉnh ren M8 dùng để điều chỉnh độ cao
            và cân bằng cho bàn máy, khung máy và thiết bị công nghiệp.
        `
    },

    {
        category: "Chân tăng chỉnh",
        code: "CTC-M10",
        name: "Chân tăng chỉnh M10",

        spec: "Ren M10",

        specifications: {
            "Mã sản phẩm": "CTC-M10",
            "Ren": "M10",
            "Loại": "Chân tăng chỉnh",
            "Ứng dụng": "Bàn máy, khung máy"
        },

        description: `
            Chân tăng chỉnh ren M10 có thể điều chỉnh độ cao,
            giúp cân bằng thiết bị trong quá trình lắp đặt.
        `
    },

    {
        category: "Chân tăng chỉnh",
        code: "CTC-M12",
        name: "Chân tăng chỉnh M12",

        spec: "Ren M12",

        specifications: {
            "Mã sản phẩm": "CTC-M12",
            "Ren": "M12",
            "Loại": "Chân tăng chỉnh",
            "Ứng dụng": "Máy móc, khung công nghiệp"
        },

        description: `
            Chân tăng chỉnh ren M12 dùng cho máy móc,
            khung máy và các thiết bị công nghiệp.
        `
    },


    /* ================= NAM CHÂM ================= */

    {
        category: "Nam châm",
        code: "NC-D20",
        name: "Nam châm D20",

        spec: "D20 mm",

        specifications: {
            "Mã sản phẩm": "NC-D20",
            "Đường kính": "20 mm",
            "Loại": "Nam châm tròn",
            "Ứng dụng": "Gá đặt, cố định, cơ khí"
        },

        description: `
            Nam châm D20 dùng trong gá đặt, cố định chi tiết
            và nhiều ứng dụng công nghiệp.
        `
    },

    {
        category: "Nam châm",
        code: "NC-D30",
        name: "Nam châm D30",

        spec: "D30 mm",

        specifications: {
            "Mã sản phẩm": "NC-D30",
            "Đường kính": "30 mm",
            "Loại": "Nam châm tròn",
            "Ứng dụng": "Gá đặt, cơ khí"
        },

        description: `
            Nam châm tròn D30 dùng trong các ứng dụng cơ khí
            và gá đặt.
        `
    },


    /* ================= VÒNG BI ================= */

    {
        category: "Vòng bi",
        code: "BB-6000",
        name: "Vòng bi 6000",

        spec: "Vòng bi 6000",

        specifications: {
            "Mã sản phẩm": "BB-6000",
            "Model": "6000",
            "Loại": "Vòng bi tiêu chuẩn",
            "Ứng dụng": "Máy móc, thiết bị công nghiệp"
        },

        description: `
            Vòng bi 6000 là loại vòng bi tiêu chuẩn dùng
            phổ biến trong máy móc và thiết bị công nghiệp.
        `
    },

    {
        category: "Vòng bi",
        code: "BB-6001",
        name: "Vòng bi 6001",

        spec: "Vòng bi 6001",

        specifications: {
            "Mã sản phẩm": "BB-6001",
            "Model": "6001",
            "Loại": "Vòng bi tiêu chuẩn",
            "Ứng dụng": "Cơ cấu quay"
        },

        description: `
            Vòng bi 6001 dùng cho các cơ cấu quay và thiết bị cơ khí.
        `
    },

    {
        category: "Vòng bi",
        code: "BB-6200",
        name: "Vòng bi 6200",

        spec: "Vòng bi 6200",

        specifications: {
            "Mã sản phẩm": "BB-6200",
            "Model": "6200",
            "Loại": "Vòng bi tiêu chuẩn",
            "Ứng dụng": "Máy móc công nghiệp"
        },

        description: `
            Vòng bi 6200 là loại vòng bi công nghiệp thông dụng,
            được sử dụng trong nhiều cơ cấu quay.
        `
    },


    /* ================= BU LÔNG ================= */

    {
        category: "Bu lông & ốc vít",
        code: "BL-M6",
        name: "Bu lông M6",

        spec: "M6",

        specifications: {
            "Mã sản phẩm": "BL-M6",
            "Kích thước ren": "M6",
            "Loại": "Bu lông tiêu chuẩn",
            "Ứng dụng": "Lắp ráp cơ khí"
        },

        description: `
            Bu lông M6 tiêu chuẩn dùng trong lắp ráp cơ khí,
            thiết bị và kết cấu công nghiệp.
        `
    },

    {
        category: "Bu lông & ốc vít",
        code: "BL-M8",
        name: "Bu lông M8",

        spec: "M8",

        specifications: {
            "Mã sản phẩm": "BL-M8",
            "Kích thước ren": "M8",
            "Loại": "Bu lông tiêu chuẩn",
            "Ứng dụng": "Kết cấu và thiết bị công nghiệp"
        },

        description: `
            Bu lông M8 tiêu chuẩn dùng trong kết cấu,
            lắp ráp máy móc và thiết bị công nghiệp.
        `
    },

    {
        category: "Bu lông & ốc vít",
        code: "BL-M10",
        name: "Bu lông M10",

        spec: "M10",

        specifications: {
            "Mã sản phẩm": "BL-M10",
            "Kích thước ren": "M10",
            "Loại": "Bu lông cơ khí tiêu chuẩn"
        },

        description: `
            Bu lông M10 dùng trong các ứng dụng lắp ráp cơ khí
            và kết cấu công nghiệp.
        `
    }
];


/* =========================================================
   2. ĐƯỜNG DẪN ẢNH
   ========================================================= */

function getProductImages(code) {

    const safeCode = code
        .trim()
        .replace(/\s+/g, "-");

    return [
        `images/${safeCode}-1.jpg`,
        `images/${safeCode}-2.jpg`,
        `images/${safeCode}-3.jpg`,
        `images/${safeCode}-4.jpg`,
        `images/${safeCode}-5.jpg`
    ];
}


/* =========================================================
   3. ICON DANH MỤC
   ========================================================= */

function getCategoryIcon(category) {

    const icons = {

        "Nhôm định hình": "▥",
        "Bản lề": "◈",
        "Bánh xe": "◉",
        "Chân tăng chỉnh": "⌃",
        "Nam châm": "◉",
        "Vòng bi": "⚙",
        "Bu lông & ốc vít": "🔩"

    };

    return icons[category] || "▦";
}


/* =========================================================
   4. TẠO DANH MỤC SẢN PHẨM
   ========================================================= */

function createCategories() {

    const categoryGrid =
        document.querySelector("#category-grid");

    if (!categoryGrid) {
        console.error("Không tìm thấy #category-grid");
        return;
    }

    categoryGrid.innerHTML = "";

    const categories = [
        ...new Set(products.map(product => product.category))
    ];

    categories.forEach(category => {

        const categoryProducts =
            products.filter(
                product => product.category === category
            );

        const card =
            document.createElement("article");

        card.className = "product-card category-card";

        card.innerHTML = `

            <div class="product-image category-icon">
                <span>
                    ${getCategoryIcon(category)}
                </span>
            </div>

            <h3>${category}</h3>

            <p>
                ${categoryProducts.length} sản phẩm
            </p>

            <a
                href="#san-pham"
                class="category-link"
            >
                Xem sản phẩm →
            </a>

        `;

        const link =
            card.querySelector(".category-link");

        if (link) {

            link.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();

                    showProducts(category);

                }
            );
        }

        categoryGrid.appendChild(card);

    });
}


/* =========================================================
   5. HIỂN THỊ DANH SÁCH SẢN PHẨM TRONG DANH MỤC
   ========================================================= */

function showProducts(category) {

    const categoryGrid =
        document.querySelector("#category-grid");

    const productSection =
        document.querySelector("#product-list-section");

    const productList =
        document.querySelector("#product-list");

    const title =
        document.querySelector("#product-category-title");

    const description =
        document.querySelector("#product-category-description");

    if (
        !categoryGrid ||
        !productSection ||
        !productList ||
        !title ||
        !description
    ) {

        console.error(
            "Thiếu phần tử HTML cần thiết."
        );

        return;
    }

    const categoryProducts =
        products.filter(
            product => product.category === category
        );

    categoryGrid.style.display = "none";

    productSection.style.display = "block";

    title.textContent = category;

    description.textContent =
        `Danh sách sản phẩm ${category.toLowerCase()}.`;

    productList.innerHTML = "";

    categoryProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card product-list-card";

        const images =
            getProductImages(product.code);

        card.innerHTML = `

            <div class="product-list-image">

                <img
                    src="${images[0]}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

            </div>

            <div class="product-list-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    <strong>Mã:</strong>
                    ${product.code}
                </p>

                <p>
                    <strong>Quy cách:</strong>
                    ${product.spec}
                </p>

                <p>
                    ${product.description.trim()}
                </p>

                <button
                    type="button"
                    class="btn primary product-detail-btn"
                >
                    Xem chi tiết →
                </button>

            </div>

        `;

        const detailButton =
            card.querySelector(".product-detail-btn");

        if (detailButton) {

            detailButton.addEventListener(
                "click",
                function() {

                    showProductDetail(product.code);

                }
            );
        }

        productList.appendChild(card);

    });

    window.location.hash =
        `category=${encodeURIComponent(category)}`;

    productSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   6. TRANG CHI TIẾT SẢN PHẨM
   ========================================================= */

function showProductDetail(code) {

    const product =
        products.find(
            item => item.code === code
        );

    if (!product) {

        console.error(
            "Không tìm thấy sản phẩm:",
            code
        );

        return;
    }

    const categoryGrid =
        document.querySelector("#category-grid");

    const productSection =
        document.querySelector("#product-list-section");

    const productList =
        document.querySelector("#product-list");

    const title =
        document.querySelector("#product-category-title");

    const description =
        document.querySelector("#product-category-description");

    if (
        !productSection ||
        !productList ||
        !title ||
        !description
    ) {

        console.error(
            "Không tìm thấy khu vực sản phẩm."
        );

        return;
    }

    if (categoryGrid) {
        categoryGrid.style.display = "none";
    }

    productSection.style.display = "block";

    title.textContent =
        product.name;

    description.textContent =
        `Mã sản phẩm: ${product.code}`;

    productList.innerHTML = "";

    const images =
        getProductImages(product.code);

    const detail =
        document.createElement("div");

    detail.className =
        "product-detail-page";

    /* -----------------------------------------
       GALLERY
       ----------------------------------------- */

    let galleryHTML = `

        <div class="product-detail-gallery">

            <div class="main-product-image">

                <img
                    id="main-product-image"
                    src="${images[0]}"
                    alt="${product.name}"
                    onclick="openImageViewer(0)"
                    onerror="this.style.display='none';"
                >

                <button
                    type="button"
                    class="gallery-prev"
                    onclick="changeMainImage(-1)"
                    aria-label="Ảnh trước"
                >
                    ‹
                </button>

                <button
                    type="button"
                    class="gallery-next"
                    onclick="changeMainImage(1)"
                    aria-label="Ảnh tiếp theo"
                >
                    ›
                </button>

            </div>

            <div class="product-thumbnails">
    `;

    images.forEach((image, index) => {

        galleryHTML += `

            <button
                type="button"
                class="product-thumbnail ${
                    index === 0 ? "active" : ""
                }"
                onclick="selectProductImage(${index})"
            >

                <img
                    src="${image}"
                    alt="${product.name} - Ảnh ${index + 1}"
                    loading="lazy"
                    onerror="this.parentElement.style.display='none';"
                >

            </button>

        `;

    });

    galleryHTML += `

            </div>

        </div>

    `;


    /* -----------------------------------------
       THÔNG TIN SẢN PHẨM
       ----------------------------------------- */

    let specificationsHTML = `

        <div class="product-detail-info">

            <div class="product-detail-heading">

                <span class="product-code">
                    ${product.code}
                </span>

                <h2>
                    ${product.name}
                </h2>

            </div>

            <div class="technical-specifications">

                <h3>
                    Thông số kỹ thuật
                </h3>

                <table>

                    <tbody>
    `;

    Object.entries(product.specifications)
        .forEach(([key, value]) => {

            specificationsHTML += `

                <tr>

                    <th>
                        ${key}
                    </th>

                    <td>
                        ${value}
                    </td>

                </tr>

            `;

        });

    specificationsHTML += `

                    </tbody>

                </table>

            </div>

        </div>

    `;


    /* -----------------------------------------
       MÔ TẢ CHI TIẾT
       ----------------------------------------- */

    const formattedDescription =
        product.description
            .trim()
            .split("\n")
            .map(
                paragraph =>
                    `<p>${paragraph.trim()}</p>`
            )
            .join("");

    const descriptionHTML = `

        <div class="product-full-description">

            <h3>
                Mô tả sản phẩm
            </h3>

            ${formattedDescription}

        </div>

    `;


    /* -----------------------------------------
       NÚT LIÊN HỆ
       ----------------------------------------- */

    const contactHTML = `

        <div class="product-detail-actions">

            <button
                type="button"
                class="btn primary"
                onclick="fillContact('${product.code}')"
            >
                Liên hệ báo giá
            </button>

            <button
                type="button"
                class="btn secondary"
                onclick="goBackToCategory('${product.category}')"
            >
                ← Quay lại danh mục
            </button>

        </div>

    `;


    detail.innerHTML = `

        <div class="product-detail-top">

            ${galleryHTML}

            ${specificationsHTML}

        </div>

        ${descriptionHTML}

        ${contactHTML}

    `;

    productList.appendChild(detail);


    /* -----------------------------------------
       LƯU TRẠNG THÁI VÀO URL
       ----------------------------------------- */

    window.location.hash =
        `product=${encodeURIComponent(product.code)}`;

    window.currentProductImages =
        images;

    window.currentProductImageIndex =
        0;

    window.currentProductCode =
        product.code;


    productSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   7. CHỌN ẢNH SẢN PHẨM
   ========================================================= */

function selectProductImage(index) {

    if (
        !window.currentProductImages ||
        !window.currentProductImages[index]
    ) {
        return;
    }

    const mainImage =
        document.querySelector(
            "#main-product-image"
        );

    if (!mainImage) {
        return;
    }

    window.currentProductImageIndex =
        index;

    mainImage.src =
        window.currentProductImages[index];


    document
        .querySelectorAll(".product-thumbnail")
        .forEach(
            (thumbnail, thumbnailIndex) => {

                thumbnail.classList.toggle(
                    "active",
                    thumbnailIndex === index
                );

            }
        );
}


/* =========================================================
   8. ẢNH TRƯỚC / ẢNH SAU
   ========================================================= */

function changeMainImage(direction) {

    if (
        !window.currentProductImages ||
        window.currentProductImages.length === 0
    ) {
        return;
    }

    let newIndex =
        window.currentProductImageIndex + direction;

    if (
        newIndex <
        0
    ) {

        newIndex =
            window.currentProductImages.length - 1;

    }

    if (
        newIndex >=
        window.currentProductImages.length
    ) {

        newIndex = 0;

    }

    selectProductImage(newIndex);
}


/* =========================================================
   9. MỞ ẢNH PHÓNG TO
   ========================================================= */

function openImageViewer(index) {

    if (
        !window.currentProductImages ||
        !window.currentProductImages[index]
    ) {
        return;
    }

    let viewer =
        document.querySelector("#image-viewer");

    if (!viewer) {

        viewer =
            document.createElement("div");

        viewer.id =
            "image-viewer";

        viewer.innerHTML = `

            <div class="image-viewer-overlay">

                <button
                    type="button"
                    class="image-viewer-close"
                    aria-label="Đóng"
                >
                    ×
                </button>

                <button
                    type="button"
                    class="image-viewer-prev"
                    aria-label="Ảnh trước"
                >
                    ‹
                </button>

                <img
                    id="image-viewer-img"
                    src=""
                    alt="Ảnh sản phẩm"
                >

                <button
                    type="button"
                    class="image-viewer-next"
                    aria-label="Ảnh tiếp theo"
                >
                    ›
                </button>

                <div
                    class="image-viewer-counter"
                    id="image-viewer-counter"
                >
                </div>

            </div>

        `;

        document.body.appendChild(viewer);


        const overlay =
            viewer.querySelector(
                ".image-viewer-overlay"
            );

        const closeButton =
            viewer.querySelector(
                ".image-viewer-close"
            );

        const prevButton =
            viewer.querySelector(
                ".image-viewer-prev"
            );

        const nextButton =
            viewer.querySelector(
                ".image-viewer-next"
            );


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeImageViewer
            );

        }


        if (prevButton) {

            prevButton.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    changeViewerImage(-1);

                }
            );

        }


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    changeViewerImage(1);

                }
            );

        }


        if (overlay) {

            overlay.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target === overlay
                    ) {

                        closeImageViewer();

                    }

                }
            );

        }

    }

    window.viewerImageIndex =
        index;

    updateImageViewer();

    viewer.style.display =
        "flex";

    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   10. CẬP NHẬT ẢNH PHÓNG TO
   ========================================================= */

function updateImageViewer() {

    const viewer =
        document.querySelector(
            "#image-viewer"
        );

    if (!viewer) {
        return;
    }

    const image =
        viewer.querySelector(
            "#image-viewer-img"
        );

    const counter =
        viewer.querySelector(
            "#image-viewer-counter"
        );

    if (
        !image ||
        !window.currentProductImages
    ) {
        return;
    }

    image.src =
        window.currentProductImages[
            window.viewerImageIndex
        ];

    if (counter) {

        counter.textContent =
            `${window.viewerImageIndex + 1} / ${
                window.currentProductImages.length
            }`;

    }
}


/* =========================================================
   11. CHUYỂN ẢNH TRONG LIGHTBOX
   ========================================================= */

function changeViewerImage(direction) {

    if (
        !window.currentProductImages ||
        window.currentProductImages.length === 0
    ) {
        return;
    }

    let index =
        window.viewerImageIndex + direction;

    if (index < 0) {

        index =
            window.currentProductImages.length - 1;

    }

    if (
        index >=
        window.currentProductImages.length
    ) {

        index = 0;

    }

    window.viewerImageIndex =
        index;

    updateImageViewer();
}


/* =========================================================
   12. ĐÓNG LIGHTBOX
   ========================================================= */

function closeImageViewer() {

    const viewer =
        document.querySelector(
            "#image-viewer"
        );

    if (viewer) {

        viewer.style.display =
            "none";

    }

    document.body.style.overflow =
        "";
}


/* =========================================================
   13. QUAY LẠI DANH MỤC
   ========================================================= */

function goBackToCategory(category) {

    window.location.hash =
        `category=${encodeURIComponent(category)}`;

    showProducts(category);
}


/* =========================================================
   14. HIỂN THỊ LẠI DANH MỤC
   ========================================================= */

function showCategories() {

    const categoryGrid =
        document.querySelector(
            "#category-grid"
        );

    const productSection =
        document.querySelector(
            "#product-list-section"
        );

    if (!categoryGrid) {
        return;
    }

    categoryGrid.style.display =
        "grid";

    if (productSection) {

        productSection.style.display =
            "none";

    }

    window.location.hash = "";

    const productTop =
        document.querySelector(
            "#san-pham"
        );

    if (productTop) {

        productTop.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =========================================================
   15. ĐIỀN SẢN PHẨM VÀO FORM LIÊN HỆ
   ========================================================= */

function fillContact(code) {

    const message =
        document.querySelector(
            "#message"
        );

    if (!message) {
        return;
    }

    message.value =
        `Tôi muốn hỏi giá sản phẩm: ${code}`;

    message.focus();

    const contact =
        document.querySelector(
            "#lien-he"
        );

    if (contact) {

        contact.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =========================================================
   16. GỬI YÊU CẦU QUA ZALO
   ========================================================= */

function sendMessage(event) {

    event.preventDefault();

    const nameElement =
        document.querySelector("#name");

    const phoneElement =
        document.querySelector("#phone");

    const messageElement =
        document.querySelector("#message");

    if (
        !nameElement ||
        !phoneElement ||
        !messageElement
    ) {

        alert(
            "Không tìm thấy biểu mẫu liên hệ."
        );

        return;
    }

    const name =
        nameElement.value.trim();

    const phone =
        phoneElement.value.trim();

    const message =
        messageElement.value.trim();

    if (
        !name ||
        !phone ||
        !message
    ) {

        alert(
            "Vui lòng nhập đầy đủ thông tin."
        );

        return;
    }

    const textMessage =
`Xin chào, tôi là ${name}.
Số điện thoại: ${phone}.
Nội dung cần tư vấn: ${message}`;


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(textMessage)
            .catch(() => {});

    }


    const zaloUrl =
        "https://zalo.me/0358854410";

    window.open(
        zaloUrl,
        "_blank",
        "noopener,noreferrer"
    );


    alert(
        "Nội dung yêu cầu đã được sao chép.\n\n" +
        "Anh hãy dán nội dung vào Zalo và gửi."
    );
}


/* =========================================================
   17. MENU MOBILE
   ========================================================= */

function setupMobileMenu() {

    const toggle =
        document.querySelector(
            ".menu-toggle"
        );

    const nav =
        document.querySelector(
            "#main-nav"
        );

    if (!toggle || !nav) {
        return;
    }

    toggle.addEventListener(
        "click",
        function() {

            nav.style.display =
                nav.style.display === "flex"
                    ? "none"
                    : "flex";

        }
    );


    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                function() {

                    if (
                        window.innerWidth <= 800
                    ) {

                        nav.style.display =
                            "none";

                    }

                }
            );

        }
    );
}


/* =========================================================
   18. ĐỌC URL HASH
   ========================================================= */

function loadFromHash() {

    const hash =
        window.location.hash;


    /* -----------------------------------------
       KHÔNG CÓ HASH
       → TRANG CHỦ / DANH MỤC
       ----------------------------------------- */

    if (!hash) {

        showCategories();

        return;
    }


    /* -----------------------------------------
       PRODUCT
       Ví dụ:
       #product=NH-2020
       ----------------------------------------- */

    if (
        hash.startsWith("#product=")
    ) {

        const code =
            decodeURIComponent(
                hash.substring(
                    "#product=".length
                )
            );

        const product =
            products.find(
                item => item.code === code
            );

        if (product) {

            showProductDetail(
                product.code
            );

            return;
        }

    }


    /* -----------------------------------------
       CATEGORY
       Ví dụ:
       #category=Nhôm%20định%20hình
       ----------------------------------------- */

    if (
        hash.startsWith("#category=")
    ) {

        const category =
            decodeURIComponent(
                hash.substring(
                    "#category=".length
                )
            );

        const exists =
            products.some(
                product =>
                    product.category === category
            );

        if (exists) {

            showProducts(category);

            return;
        }

    }


    /* -----------------------------------------
       HASH CŨ / KHÔNG HỢP LỆ
       ----------------------------------------- */

    showCategories();
}


/* =========================================================
   19. XỬ LÝ PHÍM ESC
   ========================================================= */

function setupKeyboardControls() {

    document.addEventListener(
        "keydown",
        function(event) {

            const viewer =
                document.querySelector(
                    "#image-viewer"
                );


            /* ESC */

            if (
                event.key === "Escape" &&
                viewer &&
                viewer.style.display === "flex"
            ) {

                closeImageViewer();

                return;
            }


            /* ẢNH TRƯỚC */

            if (
                viewer &&
                viewer.style.display === "flex" &&
                event.key === "ArrowLeft"
            ) {

                changeViewerImage(-1);

                return;
            }


            /* ẢNH SAU */

            if (
                viewer &&
                viewer.style.display === "flex" &&
                event.key === "ArrowRight"
            ) {

                changeViewerImage(1);

            }

        }
    );
}


/* =========================================================
   20. XỬ LÝ NÚT BACK / FORWARD TRÌNH DUYỆT
   ========================================================= */

window.addEventListener(
    "hashchange",
    function() {

        loadFromHash();

    }
);


/* =========================================================
   21. KHỞI ĐỘNG WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createCategories();

        setupMobileMenu();

        setupKeyboardControls();

        loadFromHash();

    }
);
