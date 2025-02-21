import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>Why Choose Us Over the Competition?</span>
                  <span className="text-3xl font-normal md:text-[40px]">
                    {" "}
                    {/* Get Started Now{" "} */}
                  </span>
                </h2>
                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                Unlike generic task management tools, our system is built specifically for prepress and printing professionals.
                </p>
                {/* <Link
                  href="/"
                  className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                >
                  Start using Play
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="container mx-auto mt-16">
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left font-medium text-gray-900 bg-gray-200">Feature</th>
                <th className="px-6 py-4 text-left font-medium text-gray-900 bg-gray-200">Our Platform</th>
                <th className="px-6 py-4 text-left font-medium text-gray-900 bg-gray-200">Trello</th>
                <th className="px-6 py-4 text-left font-medium text-gray-900 bg-gray-200">Asana</th>
                <th className="px-6 py-4 text-left font-medium text-gray-900 bg-gray-200">Monday.com</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-b">
                <td className="px-6 py-4 text-gray-700">Prepress-Specific Workflow</td>
                <td className="px-6 py-4 text-gray-700">✅ Yes</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
              </tr>
              {/* <tr className="border-t border-b">
                <td className="px-6 py-4 text-gray-700">Automated Preflight Checks</td>
                <td className="px-6 py-4 text-gray-700">✅ Yes</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
              </tr> */}
              <tr className="border-t border-b">
                <td className="px-6 py-4 text-gray-700">Proofing & Approval System</td>
                <td className="px-6 py-4 text-gray-700">✅ Yes</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
                <td className="px-6 py-4 text-gray-700">✅ Yes</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
              </tr>
              {/* <tr className="border-t border-b">
                <td className="px-6 py-4 text-gray-700">Color Management & Print Standards Compliance</td>
                <td className="px-6 py-4 text-gray-700">✅ Yes</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
              </tr> */}
              <tr className="border-t border-b">
                <td className="px-6 py-4 text-gray-700">Seamless Adobe & RIP Software Integration</td>
                <td className="px-6 py-4 text-gray-700">✅ Yes</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
                <td className="px-6 py-4 text-gray-700">❌ No</td>
              </tr>
              <tr className="border-t border-b">
                <td className="px-6 py-4 text-gray-700">Affordable Pricing for Printing Teams</td>
                <td className="px-6 py-4 text-gray-700">✅ Yes</td>
                <td className="px-6 py-4 text-gray-700">❌ Expensive</td>
                <td className="px-6 py-4 text-gray-700">❌ Expensive</td>
                <td className="px-6 py-4 text-gray-700">❌ Expensive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default CallToAction;
