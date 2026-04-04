import { shopProducts } from "@/constants/shop-products";

type ProductDetailsPageProps = {
  params: Promise<{ productId: string }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { productId } = await params;

  const product = shopProducts.find((item) => item.id === productId);

  if (!product) {
    return (
      <section className='mx-5 pt-30 md:mx-11.5'>
        <h1 className='font-heading text-4xl text-(--text-primary) md:text-6xl'>
          Product not found: {productId}
        </h1>
      </section>
    );
  }

  return (
    <section className='mx-5 pt-30 md:mx-11.5'>
      <h1 className='font-heading text-4xl text-(--text-primary) md:text-6xl'>
        {product.name} (ID: {product.id})
      </h1>
    </section>
  );
}
