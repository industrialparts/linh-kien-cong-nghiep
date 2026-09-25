/* =========================================================
   DỮ LIỆU SẢN PHẨM
   =========================================================
   SAU NÀY ANH CHỈ CẦN THÊM / SỬA SẢN PHẨM Ở ĐÂY.
   
   category  : Tên danh mục
   code      : Mã sản phẩm
   spec      : Quy cách / kích thước
   description: Mô tả
   image     : Tên file ảnh
   ========================================================= */

const products = [

  /* ================= NHÔM ĐỊNH HÌNH ================= */

  {
    category: "Nhôm định hình",
    code: "NH-2020",
    spec: "20 × 20 mm",
    description: "Nhôm định hình dùng cho khung máy, bàn thao tác và thiết bị công nghiệp.",
    image: ""
  },

  {
    category: "Nhôm định hình",
    code: "NH-3030",
    spec: "30 × 30 mm",
    description: "Nhôm định hình công nghiệp, phù hợp làm khung máy và kết cấu lắp ráp.",
    image: ""
  },

  {
    category: "Nhôm định hình",
    code: "NH-4040",
    spec: "40 × 40 mm",
    description: "Nhôm định hình kích thước 40 × 40 mm dùng cho khung máy công nghiệp.",
    image: ""
  },

  {
    category: "Nhôm định hình",
    code: "NH-4080",
    spec: "40 × 80 mm",
    description: "Nhôm định hình chịu lực, dùng cho khung máy và bàn thao tác.",
    image: ""
  },


  /* ================= BẢN LỀ ================= */

  {
    category: "Bản lề",
    code: "BL-01",
    spec: "Bản lề tủ máy",
    description: "Bản lề dùng cho tủ điện, tủ máy và thiết bị công nghiệp.",
    image: ""
  },

  {
    category: "Bản lề",
    code: "BL-02",
    spec: "Bản lề nhôm",
    description: "Bản lề dùng cho khung nhôm định hình và cửa bảo vệ máy.",
    image: ""
  },


  /* ================= BÁNH XE ================= */

  {
    category: "Bánh xe",
    code: "BX-50",
    spec: "D50 mm",
    description: "Bánh xe công nghiệp dùng cho bàn thao tác, xe đẩy và thiết bị.",
    image: ""
  },

  {
    category: "Bánh xe",
    code: "BX-75",
    spec: "D75 mm",
    description: "Bánh xe công nghiệp chịu tải, phù hợp xe đẩy và thiết bị sản xuất.",
    image: ""
  },

  {
    category: "Bánh xe",
    code: "BX-100",
    spec: "D100 mm",
    description: "Bánh xe công nghiệp kích thước 100 mm.",
    image: ""
  },


  /* ================= CHÂN TĂNG CHỈNH ================= */

  {
    category: "Chân tăng chỉnh",
    code: "CTC-M8",
    spec: "Ren M8",
    description: "Chân tăng chỉnh dùng cho bàn máy, khung máy và thiết bị công nghiệp.",
    image: ""
  },

  {
    category: "Chân tăng chỉnh",
    code: "CTC-M10",
    spec: "Ren M10",
    description: "Chân tăng chỉnh ren M10, có thể điều chỉnh độ cao thiết bị.",
    image: ""
  },

  {
    category: "Chân tăng chỉnh",
    code: "CTC-M12",
    spec: "Ren M12",
    description: "Chân tăng chỉnh ren M12 dùng cho máy móc và khung công nghiệp.",
    image: ""
  },


  /* ================= NAM CHÂM ================= */

  {
    category: "Nam châm",
    code: "NC-D20",
    spec: "D20 mm",
    description: "Nam châm dùng trong gá đặt, cố định và ứng dụng công nghiệp.",
    image: ""
  },

  {
    category: "Nam châm",
    code: "NC-D30",
    spec: "D30 mm",
    description: "Nam châm tròn dùng cho các ứng dụng cơ khí và gá đặt.",
    image: ""
  },


  /* ================= VÒNG BI ================= */

  {
    category: "Vòng bi",
    code: "BB-6000",
    spec: "Vòng bi 6000",
    description: "Vòng bi tiêu chuẩn dùng trong máy móc và thiết bị công nghiệp.",
    image: ""
  },

  {
    category: "Vòng bi",
    code: "BB-6001",
    spec: "Vòng bi 6001",
    description: "Vòng bi tiêu chuẩn dùng cho cơ cấu quay.",
    image: ""
  },

  {
    category: "Vòng bi",
    code: "BB-6200",
    spec: "Vòng bi 6200",
    description: "Vòng bi công nghiệp thông dụng.",
    image: ""
  },


  /* ================= BU LÔNG & ỐC VÍT ================= */

  {
    category: "Bu lông & ốc vít",
    code: "BL-M6",
    spec: "M6",
    description: "Bu lông tiêu chuẩn dùng trong lắp ráp cơ khí.",
    image: ""
  },

  {
    category: "Bu lông & ốc vít",
    code: "BL-M8",
    spec: "M8",
    description: "Bu lông tiêu chuẩn dùng trong kết cấu và thiết bị công nghiệp.",
    image: ""
  },

  {
    category: "Bu lông & ốc vít",
    code: "BL-M10",
    spec: "M10",
    description: "Bu lông cơ khí tiêu chuẩn.",
    image: ""
  },


  /* ================= KHÍ NÉN ================= */

  {
    category: "Khí nén",
    code: "KP-VAN",
    spec: "Van khí nén",
    description: "Van và phụ kiện khí nén sử dụng trong máy móc công nghiệp.",
    image: ""
  },

  {
    category: "Khí nén",
    code: "KP-XI LANH",
    spec: "Xy lanh khí nén",
    description: "Xy lanh khí nén dùng cho cơ cấu tự động hóa.",
    image: ""
  }

];



/* =========================================================
   TẠO DANH MỤC
   ========================================================= */

function createCategories() {

  const categoryGrid = document.querySelector("#category-grid");

  if (!categoryGrid) return;

  categoryGrid.innerHTML = "";

  const categories = [...new Set(products.map(product => product.category))];

  categories.forEach(category => {

    const categoryProducts =
      products.filter(product => product.category === category);

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        ${getCategoryIcon(category)}
      </div>

      <h3>${category}</h3>

      <p>
        ${categoryProducts.length} sản phẩm
      </p>

      <a href="#" onclick="showProducts('${category}'); return false;">
        Xem sản phẩm →
      </a>
    `;

    categoryGrid.appendChild(card);

  });

}



/* =========================================================
   ICON CHO DANH MỤC
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
   HIỂN THỊ SẢN PHẨM TRONG DANH MỤC
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


  if (!categoryGrid || !productSection || !productList) return;


  const categoryProducts =
    products.filter(product => product.category === category);


  /* Ẩn danh mục */

  categoryGrid.style.display = "none";


  /* Hiện danh sách sản phẩm */

  productSection.style.display = "block";


  title.textContent = category;


  description.textContent =
    `Danh sách sản phẩm ${category.toLowerCase()}.`;


  productList.innerHTML = "";


  categoryProducts.forEach(product => {

    const card =
      document.createElement("article");

    card.className = "product-card";


    let imageHTML;

    if (product.image && product.image.trim() !== "") {

      imageHTML = `
        <img
          src="${product.image}"
          alt="${product.code}"
          style="
            width:100%;
            height:180px;
            object-fit:contain;
            border-radius:10px;
          "
        >
      `;

    } else {

      imageHTML = `
        <div class="product-image">
          ${getCategoryIcon(category)}
        </div>
      `;

    }


    card.innerHTML = `

      ${imageHTML}

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
          class="btn primary"
          href="#lien-he"
          onclick="fillContact('${product.code}')"
        >
          Liên hệ báo giá
        </a>

      </div>

    `;


    productList.appendChild(card);

  });


  /* Cuộn đến danh sách */

  productSection.scrollIntoView({
    behavior: "smooth"
  });

}



/* =========================================================
   QUAY LẠI DANH MỤC
   ========================================================= */

function showCategories() {

  const categoryGrid =
    document.querySelector("#category-grid");

  const productSection =
    document.querySelector("#product-list-section");


  if (!categoryGrid || !productSection) return;


  productSection.style.display = "none";

  categoryGrid.style.display = "grid";


  document.querySelector("#san-pham")
    .scrollIntoView({
      behavior: "smooth"
    });

}



/* =========================================================
   ĐIỀN SẴN MÃ SẢN PHẨM VÀO FORM LIÊN HỆ
   ========================================================= */

function fillContact(code) {

  const message =
    document.querySelector("#message");

  if (message) {

    message.value =
      `Tôi muốn hỏi giá sản phẩm: ${code}`;

  }

}



/* =========================================================
   MENU MOBILE
   ========================================================= */

const toggle =
  document.querySelector(".menu-toggle");

const nav =
  document.querySelector("#main-nav");


if (toggle && nav) {

  toggle.addEventListener("click", () => {

    nav.style.display =
      nav.style.display === "flex"
        ? "none"
        : "flex";

  });

}


document
  .querySelectorAll("#main-nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      if (window.innerWidth <= 800) {

        nav.style.display = "none";

      }

    });

  });



/* =========================================================
   FORM LIÊN HỆ
   ========================================================= */

function sendMessage(event) {

  event.preventDefault();

  const name =
    document.querySelector("#name").value.trim();

  const phone =
    document.querySelector("#phone").value.trim();

  const message =
    document.querySelector("#message").value.trim();


  if (!name || !phone || !message) {

    alert("Vui lòng nhập đầy đủ thông tin.");

    return;

  }


  const text =
    `Xin chào, tôi là ${name}.
Số điện thoại: ${phone}.
Nội dung cần tư vấn: ${message}`;


  // Sao chép nội dung yêu cầu vào bộ nhớ tạm

  if (navigator.clipboard) {

    navigator.clipboard.writeText(text)
      .catch(() => {});

  }


  // Mở Zalo theo số điện thoại của anh

  const zaloUrl =
    "https://zalo.me/0358854410";

  window.open(zaloUrl, "_blank");


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

document.addEventListener("DOMContentLoaded", () => {

  createCategories();

});
