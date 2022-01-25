export default function Error({ message }) {
  return (
    <p className="mt-10 text-xl font-semibold text-center text-white md:text-2xl lg:text-3xl">
      {message}
    </p>
  );
}
