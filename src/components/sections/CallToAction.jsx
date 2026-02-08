import { useState } from "react";
import CtaImg from "../../assets/img/cta_image.png";
import UseSubscribeEmail from "../../hooks/UseSubscribeEmail";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const { loading, err, message, handleSubscribe } = UseSubscribeEmail();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubscribe(email);
  };
  return (
    <>
      <section className="relative w-full">
        <img
          src={CtaImg}
          alt="CTA Background"
          className="w-full h-[260px] md:h-auto object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center md:justify-end px-4 md:px-8">
          <div className="w-full md:w-6/12 p-4 md:p-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full md:w-6/12">
              <h1 className="text-white text-xl md:text-4xl font-bold font-saira leading-snug md:w-10/12 md:mx-0 mx-auto w-8/12">
                Get more discount Off your order
              </h1>

              <p className="mt-3 text-white font-saira text-sm md:text-2xl font-thin">
                Join our mailing list
              </p>
            </div>

            <div className="w-full md:w-10/12 py-6 md:py-10">
              <form onSubmit={onSubmit} className="flex  gap-3 w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 font-saira rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#286F6C]"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900 disabled:opacity-50 text-sm whitespace-nowrap font-saira"
                >
                  {loading ? "Submitting..." : "Shop Now"}
                </button>
              </form>

              {message && (
                <div className="mt-3 text-green-400 text-sm font-semibold">
                  {message}
                </div>
              )}
              {err && (
                <div className="mt-3 text-red-400 text-sm font-semibold">
                  {err}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
