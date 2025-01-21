import syltherineImage from "../assets/imgs/syltherineB.png";
import leviosaImage from "../assets/imgs/leviosaB.png";
import lolitoImage from "../assets/imgs/lolitoB.png";
import respiraImage from "../assets/imgs/respiraB.png";
import zephyrImage from "../assets/imgs/zephyrB.png";
import astraImage from "../assets/imgs/astraB.png";
import pinkgyImage from "../assets/imgs/pinkgyB.png";
import pottyImage from "../assets/imgs/pottyB.png";
import velloriaImage from "../assets/imgs/velloriaB.png";
import lunaraImage from "../assets/imgs/lunaraB.png";
import tesseraImage from "../assets/imgs/tesseraB.png";
import nyvoraImage from "../assets/imgs/nyvoraB.png";
import aqualisImage from "../assets/imgs/aqualisB.png";
import orlinaImage from "../assets/imgs/orlinaB.png";
import mirellaImage from "../assets/imgs/mirellaB.png";
import eliraImage from "../assets/imgs/eliraB.png";

const products = [
  {
    id: 1,
    name: "Syltherine",
    image: syltherineImage, // Chemin vers l'image
    description: "Syltherine is a stylish café chair designed to elevate any space with its sleek and modern aesthetic.Compact yet sturdy, it stands out with its contemporary design and exceptional craftsmanship. Perfectly blending form and function, this chair offers optimal comfort while making a statement. Its streamlined silhouette and premium materials make it an ideal choice for cafés, home dining spaces, or offices seeking a touch of elegance and sophistication.",
    price: 200,
  },
  {
    id: 2,
    name: "Leviosa",
    image: leviosaImage,
    description: "The Leviosa chair combines luxurious suede with a sleek, modern design to create the perfect blend of comfort and style. Its soft, high-quality suede upholstery offers a rich tactile experience, while its elegant silhouette makes it a standout piece in any room. Ideal for living spaces, dining areas, or offices, the Leviosa chair brings both sophistication and comfort to your decor. Designed with both aesthetics and durability in mind, it’s a timeless piece that elevates any setting.",
    price: 150,
  },
  {
    id: 3,
    name: "Lolito",
    image: lolitoImage,
    description: "Experience the perfect blend of comfort and contemporary design with the Lolito Sofa. Crafted to offer both style and relaxation, this spacious sofa is upholstered in luxurious fabric, providing a soft yet supportive seating experience. Its clean, modern lines and elegant silhouette make it an ideal addition to any living space. Whether you're hosting friends or simply enjoying a quiet evening, the Lolito Sofa promises to be a stunning focal point in your home, combining beauty with ultimate comfort.",
    price: 120,
  },
  {
    id: 4,
    name: "Respira",
    image: respiraImage,
    description: "Elevate your outdoor gatherings with the Respira Outdoor Bar Table and Stool set. Crafted with durability in mind, this stylish set includes a sleek bar table and comfortable stools, designed for both elegance and functionality. Perfect for patios, gardens, or balconies, the Respira set is made from weather-resistant materials to ensure long-lasting quality, even in the harshest conditions. With its clean, modern design, it's the perfect choice for enjoying drinks or meals outdoors in comfort and sophistication.",
    price: 600,
  },
  {
    id: 5,
    name: "Zephyr",
    image: zephyrImage,
    description: "The Zephyr chair is a masterpiece of comfort and style, designed to envelop you in a soft, luxurious experience. Crafted with premium, plush fabric, its gentle cushioning provides unparalleled support, making it the perfect choice for relaxing after a long day. The chair’s sleek, modern design adds a touch of sophistication to any room, while its high-quality construction ensures lasting durability. Ideal for living rooms, bedrooms, or reading corners, the Zephyr chair offers the ultimate blend of comfort and contemporary elegance. With its perfect balance of softness and strength, this chair is a true statement piece that enhances your space with both beauty and coziness.",
    price: 380,
  },
  {
    id: 6,
    name: "Astra",
    image: astraImage,
    description: "The Astra chair is a striking blend of futuristic design and exceptional comfort. With its unique, refined shape and ultra-modern lines, this chair commands attention in any space. The luxurious, soft upholstery cradles your body, offering both comfort and support for hours of relaxation. Its cutting-edge design not only elevates your decor but also brings a sense of innovation and elegance to any room. Perfect for contemporary living rooms, lounges, or stylish offices, the Astra chair combines bold aesthetics with practicality. Crafted with quality materials, it’s a durable and iconic piece that transforms any environment into a chic, modern haven.",
    price: 489,
  },
  {
    id: 7,
    name: "Pinkgy",
    image: pinkgyImage,
    description: "The Pinkgy TV stand is a beautiful fusion of rustic charm and timeless craftsmanship. Made from solid wood, it exudes natural warmth and character, bringing a cozy, earthy feel to your living space. The sturdy construction ensures durability, while its unique wood grain adds a touch of authenticity to any room. With ample storage space for media devices and accessories, the Pinkgy TV stand is both functional and stylish. Perfect for living rooms or entertainment areas, this piece adds a welcoming, rustic vibe to your home. Its classic design and solid build make it a lasting addition to your decor.",
    price: 179,
  },
  {
    id: 8,
    name: "Potty",
    image: pottyImage,
    description: "The Potty shoe rack is the perfect solution for those who appreciate sleek, minimalist design. With its clean lines and simple structure, it provides a stylish way to organize your footwear without taking up too much space. Crafted from high-quality materials, the Potty shoe rack combines functionality with modern elegance, offering ample storage for shoes while maintaining a clutter-free environment. Ideal for entryways, hallways, or closets, it’s a versatile piece that enhances your space with its understated yet functional design. Compact, durable, and effortlessly chic, the Potty shoe rack is a must-have for any contemporary home.",
    price: 99,
  },
  {
    id: 9,
    name: "Velloria",
    image: velloriaImage,
    description: "The Velloria armchair is a stunning blend of luxury and modern design, featuring a vibrant yellow hue that instantly brightens any room. Its plush, high-quality upholstery offers exceptional comfort, while the sleek, contemporary lines of the chair add a touch of sophistication to your space. Perfect for living rooms, reading corners, or lounges, the Velloria armchair serves as both a functional seat and a striking design statement. With its luxurious materials and eye-catching color, it effortlessly combines comfort and style, making it an unforgettable addition to any interior.",
    price: 299,
  },
  {
    id: 10,
    name: "Lunara",
    image: lunaraImage,
    description: "The Lunara dining table is a perfect blend of elegance and contemporary style, crafted from high-quality wood with a sleek, on-trend design. Its clean lines and sophisticated finish make it an ideal centerpiece for modern dining rooms, while the sturdy construction ensures lasting durability. The Lunara table’s understated beauty effortlessly complements a variety of interior styles, adding both warmth and sophistication to your space. Whether hosting a dinner party or enjoying a casual meal, this elegant dining table offers both functionality and timeless appeal, elevating any dining experience.",
    price: 399,
  },
  {
    id: 11,
    name: "Tessera",
    image: tesseraImage,
    description: "The Tessara dining table is a stunning piece that combines quality craftsmanship with a bold, modern design. Made from high-quality wood, its round shape offers a timeless appeal, while its sleek, unique design ensures it stands out in any space. The smooth finish and attention to detail highlight its superior construction, making it both durable and visually striking. Perfect for modern dining rooms or open-plan living areas, the Tessara table is sure to catch the eye and become a conversation starter. With its perfect balance of elegance and functionality, it adds a touch of sophistication to any home.",
    price: 499,
  },
  {
    id: 12,
    name: "Nyvora",
    image: nyvoraImage,
    description: "The Nyvora bedside table is the epitome of elegance and practicality, designed to complement any modern bedroom. Its sleek, refined silhouette and high-quality finish create a sophisticated look, while offering ample storage for your nighttime essentials. Crafted with attention to detail, the Nyvora table seamlessly blends style and functionality. Whether placed beside your bed or as a statement piece in a guest room, this elegant bedside table adds a touch of luxury to your space, combining both beauty and purpose in perfect harmony.",
    price: 180,
  },
  {
    id: 13,
    name: "Aqualis",
    image: aqualisImage,
    description: "The Aqualis bathroom storage cabinet is a perfect blend of sleek design and luxurious materials. Featuring a clean, white finish, its modern aesthetic is complemented by elegant gold stainless steel legs, adding a touch of sophistication to your bathroom. The cabinet provides ample storage space, helping you keep your bathroom essentials organized while maintaining a clutter-free environment. Its refined design makes it an ideal addition to any contemporary bathroom, combining both style and practicality. With its durable construction and striking finish, the Aqualis cabinet elevates your space with both functionality and flair.",
    price: 250
  },
  {
    id: 14,
    name: "Orlina",
    image: orlinaImage,
    description: "The Orlina dresser is an elegant solution for smaller spaces, offering both style and practicality. Made from light wood, its clean lines and minimalist design make it a perfect fit for contemporary interiors, while providing ample storage in a compact form. The dresser’s subtle charm and neutral tone allow it to blend seamlessly with any decor, making it ideal for bedrooms, entryways, or even offices. With its quality craftsmanship and efficient use of space, the Orlina dresser combines timeless elegance with modern functionality, making it an essential piece for those seeking both beauty and practicality in their home.",
    price: 390
  },
  {
    id: 15,
    name: "Mirella",
    image: mirellaImage,
    description: "The Mirella dressing unit is the ultimate solution for those who need plenty of storage space without compromising on style. Crafted from solid dark wood, its rich, luxurious finish gives it a sophisticated and timeless appeal. This chic modular unit offers ample room for organizing clothes, accessories, and shoes, making it the perfect choice for larger wardrobes or those who appreciate a spacious, well-organized dressing area. The Mirella unit’s sleek design and sturdy construction ensure that it not only looks stunning but also provides lasting functionality. Ideal for those who seek both form and function, it transforms your dressing space into an elegant, efficient sanctuary.",
    price: 1100
  },
  {
    id: 16,
    name: "Elira",
    image: eliraImage,
    description: "The Elira lounge chair is the perfect combination of trendsetting design and exceptional comfort. With its soft pastel color and modern swivel functionality, it adds a unique touch to any room. The chair’s sleek, contemporary shape ensures it stands out, while the plush cushioning provides a relaxing seating experience. Whether placed in a living room, office, or reading nook, the Elira chair’s eye-catching design and vibrant hue will immediately draw attention, making it a statement piece in any space. With its perfect balance of style and comfort, the Elira chair is a must-have for those who appreciate modern elegance.",
    price: 280
  },

];

export default products;
