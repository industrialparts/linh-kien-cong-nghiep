```javascript
const products = [

    /* ================= NHÔM ĐỊNH HÌNH ================= */

    {
        category: "Nhôm định hình",
        code: "NH-2020",
        spec: "20 × 20 mm",
        description: "Nhôm định hình 2020 dùng cho khung máy nhỏ, bàn thao tác, giá đỡ và thiết bị tự động hóa."
    },

    {
        category: "Nhôm định hình",
        code: "NH-3030",
        spec: "30 × 30 mm",
        description: "Nhôm định hình 3030 phù hợp làm khung máy, bàn thao tác, giá đỡ và kết cấu lắp ráp."
    },

    {
        category: "Nhôm định hình",
        code: "NH-4040",
        spec: "40 × 40 mm",
        description: "Nhôm định hình 4040 dùng phổ biến cho khung máy, bàn thao tác, băng tải và thiết bị công nghiệp."
    },

    {
        category: "Nhôm định hình",
        code: "NH-4080",
        spec: "40 × 80 mm",
        description: "Nhôm định hình 4080 có tiết diện lớn, phù hợp khung máy, băng tải và kết cấu cần độ cứng cao."
    },

    {
        category: "Nhôm định hình",
        code: "NH-4545",
        spec: "45 × 45 mm",
        description: "Nhôm định hình 4545 dùng cho khung máy công nghiệp, bàn thao tác, vách máy và giá đỡ."
    },

    {
        category: "Nhôm định hình",
        code: "NH-5050",
        spec: "50 × 50 mm",
        description: "Nhôm định hình 5050 phù hợp khung máy, bàn thao tác, giá đỡ và hệ thống tự động hóa."
    },

    {
        category: "Nhôm định hình",
        code: "NH-6060",
        spec: "60 × 60 mm",
        description: "Nhôm định hình 6060 dùng cho khung máy lớn, bàn thao tác, băng tải và kết cấu công nghiệp."
    },

    {
        category: "Nhôm định hình",
        code: "NH-8080",
        spec: "80 × 80 mm",
        description: "Nhôm định hình 8080 phù hợp các kết cấu máy lớn và ứng dụng yêu cầu tiết diện, độ cứng cao."
    },

    {
        category: "Nhôm định hình",
        code: "NH-3060",
        spec: "30 × 60 mm",
        description: "Nhôm định hình 3060 dùng cho khung máy, giá đỡ, băng tải và vách bảo vệ thiết bị."
    },

    {
        category: "Nhôm định hình",
        code: "NH-40120",
        spec: "40 × 120 mm",
        description: "Nhôm định hình 40120 dùng cho kết cấu máy lớn, khung chịu lực, băng tải và hệ thống tự động hóa."
    },


    /* ================= BẢN LỀ ================= */

    {
        category: "Bản lề",
        code: "BL-01",
        spec: "Bản lề tủ máy",
        description: "Bản lề dùng cho tủ điện, tủ máy và thiết bị công nghiệp."
    },

    {
        category: "Bản lề",
        code: "BL-02",
        spec: "Bản lề nhôm",
        description: "Bản lề dùng cho khung nhôm định hình và cửa bảo vệ máy."
    },


    /* ================= BÁNH XE ================= */

    {
        category: "Bánh xe",
        code: "BX-50",
        spec: "D50 mm",
        description: "Bánh xe công nghiệp dùng cho bàn thao tác, xe đẩy và thiết bị."
    },

    {
        category: "Bánh xe",
        code: "BX-75",
        spec: "D75 mm",
        description: "Bánh xe công nghiệp chịu tải, phù hợp xe đẩy và thiết bị sản xuất."
    },

    {
        category: "Bánh xe",
        code: "BX-100",
        spec: "D100 mm",
        description: "Bánh xe công nghiệp kích thước 100 mm."
    },


    /* ================= CHÂN TĂNG CHỈNH ================= */

    {
        category: "Chân tăng chỉnh",
        code: "CTC-M8",
        spec: "Ren M8",
        description: "Chân tăng chỉnh dùng cho bàn máy, khung máy và thiết bị công nghiệp."
    },

    {
        category: "Chân tăng chỉnh",
        code: "CTC-M10",
        spec: "Ren M10",
        description: "Chân tăng chỉnh ren M10, có thể điều chỉnh độ cao thiết bị."
    },

    {
        category: "Chân tăng chỉnh",
        code: "CTC-M12",
        spec: "Ren M12",
        description: "Chân tăng chỉnh ren M12 dùng cho máy móc và khung công nghiệp."
    },


    /* ================= NAM CHÂM ================= */

    {
        category: "Nam châm",
        code: "NC-D20",
        spec: "D20 mm",
        description: "Nam châm dùng trong gá đặt, cố định và ứng dụng công nghiệp."
    },

    {
        category: "Nam châm",
        code: "NC-D30",
        spec: "D30 mm",
        description: "Nam châm tròn dùng cho các ứng dụng cơ khí và gá đặt."
    },


    /* ================= VÒNG BI ================= */

    {
        category: "Vòng bi",
        code: "BB-6000",
        spec: "Vòng bi 6000",
        description: "Vòng bi tiêu chuẩn dùng trong máy móc và thiết bị công nghiệp."
    },

    {
        category: "Vòng bi",
        code: "BB-6001",
        spec: "Vòng bi 6001",
        description: "Vòng bi tiêu chuẩn dùng cho cơ cấu quay."
    },

    {
        category: "Vòng bi",
        code: "BB-6200",
        spec: "Vòng bi 6200",
        description: "Vòng bi công nghiệp thông dụng."
    },


    /* ================= BU LÔNG & ỐC VÍT ================= */

    {
        category: "Bu lông & ốc vít",
        code: "BL-M6",
        spec: "M6",
        description: "Bu lông tiêu chuẩn dùng trong lắp ráp cơ khí."
    },

    {
        category: "Bu lông & ốc vít",
        code: "BL-M8",
        spec: "M8",
        description: "Bu lông tiêu chuẩn dùng trong kết cấu và thiết bị công nghiệp."
    },

    {
        category: "Bu lông & ốc vít",
        code: "BL-M10",
        spec: "M10",
        description: "Bu lông cơ khí tiêu chuẩn."
    },


    /* ================= KHÍ NÉN ================= */

    {
        category: "Khí nén",
        code: "KP-VAN",
        spec: "Van khí nén",
        description: "Van và phụ kiện khí nén sử dụng trong máy móc công nghiệp."
    },

    {
        category: "Khí nén",
        code: "KP-XI-LANH",
        spec: "Xy lanh khí nén",
        description: "Xy lanh khí nén dùng cho cơ cấu tự động hóa."
    }

];


/* =========================================================
   TẠO TÊN FILE ẢNH

   Mỗi sản phẩm có 5 ảnh:

   MÃ-1.jpg
   MÃ-2.jpg
   MÃ-3.jpg
   MÃ-4.jpg
   MÃ-5.jpg
========================================================= */

function getProductImages(code) {

    const safeCode = code.replace(/\s+/g, "-");

    return [
        `images/${safeCode}-1.jpg`,
        `images/${safeCode}-2.jpg`,
        `images/${safeCode}-3.jpg`,
        `images/${safeCode}-4.jpg`,
        `images/${safeCode}-5.jpg`
    ];
}


/* =========================================================
   ICON DANH MỤC
========================================================= */

function getCategoryIcon(category) {

    const icons = {

        "Nhôm định hình": "▥",
        "Bản lề": "◈",
        "Bánh xe": "BX",
        "Chân tăng chỉnh": "⌃",
        "Nam châm": "◉",
        "Vòng bi": "⚙",
        "Bu lông & ốc vít": "🔩",
        "Khí nén": "◎"

    };

    return icons[category] || "▦";
}


/* =========================================================
   TẠO DANH MỤC
========================================================= */

function createCategories() {

    const categoryGrid =
        document.querySelector("#category-grid");

    if (!categoryGrid) {

        console.error(
            "Không tìm thấy #category-grid"
        );

        return;
    }

    categoryGrid.innerHTML = "";

    const categories = [
        ...new Set(
            products.map(
                product => product.category
            )
        )
    ];

    categories.forEach(category => {

        const categoryProducts =
            products.filter(
                product =>
                    product.category === category
            );

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">
                <span>
                    ${getCategoryIcon(category)}
                </span>
            </div>

            <h3>${category}</h3>

            <p>
                ${categoryProducts.length} sản phẩm
            </p>

            <a href="#" class="category-link">
                Xem sản phẩm →
            </a>

        `;

        const link =
            card.querySelector(
                ".category-link"
            );

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
   HIỂN THỊ ẢNH SẢN PHẨM
========================================================= */

function createProductImages(product) {

    const images =
        getProductImages(product.code);

    let html = `
        <div class="product-gallery">
    `;

    images.forEach(
        (image, index) => {

            html += `

                <div class="gallery-image">

                    <img
                        src="${image}"
                        alt="${product.code} - Ảnh ${index + 1}"
                        loading="lazy"
                        onerror="this.parentElement.style.display='none';"
                        onclick="openImage('${image}')"
                    >

                </div>

            `;

        }
    );

    html += `
        </div>
    `;

    return html;
}


/* =========================================================
   HIỂN THỊ SẢN PHẨM
========================================================= */

function showProducts(category) {

    const categoryGrid =
        document.querySelector(
            "#category-grid"
        );

    const productSection =
        document.querySelector(
            "#product-list-section"
        );

    const productList =
        document.querySelector(
            "#product-list"
        );

    const title =
        document.querySelector(
            "#product-category-title"
        );

    const description =
        document.querySelector(
            "#product-category-description"
        );

    if (
        !categoryGrid ||
        !productSection ||
        !productList ||
        !title ||
        !description
    ) {

        console.error(
            "Thiếu phần tử HTML cần thiết để hiển thị sản phẩm."
        );

        return;
    }


    const categoryProducts =
        products.filter(
            product =>
                product.category === category
        );


    categoryGrid.style.display =
        "none";

    productSection.style.display =
        "block";


    title.textContent =
        category;


    description.textContent =
        `Danh sách sản phẩm ${category.toLowerCase()}.`;


    productList.innerHTML = "";


    categoryProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";


        card.innerHTML = `

            ${createProductImages(product)}

            <h3>
                ${product.code}
            </h3>

            <p>
                <strong>Quy cách:</strong>
                ${product.spec}
            </p>

            <p>
                ${product.description}
            </p>

            <div style="margin-top:15px;">

                <a
                    class="btn primary product-contact-btn"
                    href="#lien-he"
                >
                    Liên hệ báo giá
                </a>

            </div>

        `;


        const contactButton =
            card.querySelector(
                ".product-contact-btn"
            );


        if (contactButton) {

            contactButton.addEventListener(
                "click",
                function() {

                    fillContact(
                        product.code
                    );

                }
            );

        }


        productList.appendChild(card);

    });


    productSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   PHÓNG TO ẢNH
========================================================= */

function openImage(image) {

    let viewer =
        document.querySelector(
            "#image-viewer"
        );


    /* Tạo khung xem ảnh nếu chưa có */

    if (!viewer) {

        viewer =
            document.createElement("div");

        viewer.id =
            "image-viewer";


        viewer.innerHTML = `

            <div class="image-viewer-overlay">

                <button
                    class="image-viewer-close"
                    aria-label="Đóng"
                >
                    ×
                </button>

                <img
                    id="image-viewer-img"
                    src=""
                    alt="Ảnh sản phẩm"
                >

            </div>

        `;


        document.body.appendChild(
            viewer
        );


        const overlay =
            viewer.querySelector(
                ".image-viewer-overlay"
            );


        const closeButton =
            viewer.querySelector(
                ".image-viewer-close"
            );


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                function() {

                    viewer.style.display =
                        "none";

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

                        viewer.style.display =
                            "none";

                    }

                }
            );

        }

    }


    const viewerImage =
        viewer.querySelector(
            "#image-viewer-img"
        );


    if (viewerImage) {

        viewerImage.src =
            image;

    }


    viewer.style.display =
        "flex";

}


/* =========================================================
   QUAY LẠI DANH MỤC
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


    if (
        !categoryGrid ||
        !productSection
    ) {

        return;

    }


    productSection.style.display =
        "none";


    categoryGrid.style.display =
        "grid";


    const productSectionTop =
        document.querySelector(
            "#san-pham"
        );


    if (productSectionTop) {

        productSectionTop.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   ĐIỀN MÃ SẢN PHẨM VÀO FORM
========================================================= */

function fillContact(code) {

    const message =
        document.querySelector(
            "#message"
        );


    if (message) {

        message.value =
            `Tôi muốn hỏi giá sản phẩm: ${code}`;

        message.focus();

    }

}


/* =========================================================
   MENU MOBILE
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


    navLinks.forEach(link => {

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

    });

}


/* =========================================================
   FORM LIÊN HỆ → ZALO
========================================================= */

function sendMessage(event) {

    event.preventDefault();


    const nameElement =
        document.querySelector(
            "#name"
        );


    const phoneElement =
        document.querySelector(
            "#phone"
        );


    const messageElement =
        document.querySelector(
            "#message"
        );


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


    const text =
        `Xin chào, tôi là ${name}.
Số điện thoại: ${phone}.
Nội dung cần tư vấn: ${message}`;


    /* Sao chép nội dung */

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(text)
            .catch(() => {});

    }


    /* Mở Zalo */

    const zaloUrl =
        "https://zalo.me/0358854410";


    window.open(
        zaloUrl,
        "_blank",
        "noopener,noreferrer"
    );


    alert(
        "Nội dung yêu cầu đã được chuẩn bị.\n\n" +
        text +
        "\n\n" +
        "Nội dung đã được sao chép nếu trình duyệt cho phép.\n" +
        "Anh hãy dán nội dung vào cuộc trò chuyện Zalo và gửi."
    );

}


/* =========================================================
   KHỞI ĐỘNG WEBSITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createCategories();

        setupMobileMenu();

    }
);
```
