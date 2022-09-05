export interface IProduct {
    id: number;
    description: string;
    price: number;
    descriptionPrice: string;
    image: string;
    stockQuantity: number;
}
export interface ICartProduct extends IProduct{
    quantity:number
}

export const products: IProduct[] = [
    { id: 1, description: "Mouse gamer", price: 439.00, descriptionPrice: "À vista no PIX", image: "./assets/mouse-3.jpg", stockQuantity: 10 },
    { id: 2, description: "Monitor muito bom", price: 1200.50, descriptionPrice: "À vista no PIX", image: "./assets/monitor-1.jpg", stockQuantity: 91 },
    { id: 3, description: "Teclado excelente", price: 749.99, descriptionPrice: "À vista no PIX", image: "./assets/teclado-1.jpg", stockQuantity: 50 },
    { id: 4, description: "Fone para quem joga FPS", price: 599.99, descriptionPrice: "À vista no PIX", image: "./assets/fone-de-ouvido-2.jpg", stockQuantity: 10 },
    { id: 5, description: "Fone de ouvido", price: 299.99, descriptionPrice: "À vista no PIX", image: "./assets/fone-de-ouvido-1.jpg", stockQuantity: 37 },
    { id: 6, description: "Fone de ouvido bom", price: 399.99, descriptionPrice: "À vista no PIX", image: "./assets/fone-de-ouvido-3.jpg", stockQuantity: 26 },
    { id: 7, description: "HD 1TB", price: 499.99, descriptionPrice: "À vista no PIX", image: "./assets/hd.jpg", stockQuantity: 5 },
    { id: 8, description: "Combo de placa de vídeos", price: 18449.99, descriptionPrice: "À vista no PIX", image: "./assets/placa-video.jpg", stockQuantity: 0 },
    { id: 9, description: "Processador Ryzen", price: 1000, descriptionPrice: "À vista no PIX", image: "./assets/processador.jpg", stockQuantity: 3 },
    { id: 10, description: "Notebook bom", price: 2500, descriptionPrice: "À vista no PIX", image: "./assets/laptop-1.jpg", stockQuantity: 48 },
    { id: 11, description: "Notebook excelente", price: 4500, descriptionPrice: "À vista no PIX", image: "./assets/laptop-2.jpg", stockQuantity: 10 },
    { id: 12, description: "Mouse barato", price: 20, descriptionPrice: "À vista no PIX", image: "./assets/mouse-1.png", stockQuantity: 9 },
    { id: 13, description: "Mouse ótimo", price: 200, descriptionPrice: "À vista no PIX", image: "./assets/mouse-2.jpg", stockQuantity: 100 },
    { id: 14, description: "Mouse pequeno", price: 50, descriptionPrice: "À vista no PIX", image: "./assets/mouse-4.jpg", stockQuantity: 1 },
    { id: 15, description: "Teclado bom", price: 159.99, descriptionPrice: "À vista no PIX", image: "./assets/teclado-2.jpg", stockQuantity: 179 },
]