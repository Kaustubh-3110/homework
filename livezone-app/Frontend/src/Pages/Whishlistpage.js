export default function Whishlistpage({ likesproducts }) {
  return (
    <>
    {likesproducts.map(item => (
      <p>{item}</p>
    ))}
    </>
  )
}