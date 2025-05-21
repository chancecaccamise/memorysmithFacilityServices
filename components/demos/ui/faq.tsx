import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What types of property maintenance services do you offer?",
    answer: "We provide a full range of residential and commercial services in Savannah, including lawn care, painting, pressure washing, handyman repairs, carpentry, moving and hauling, and property cleaning.",
  },
  {
    question: "Are your services available for both residential and commercial properties?",
    answer: "Yes! We proudly serve both homeowners and businesses throughout Savannah, offering flexible scheduling and customized solutions for any type of property.",
  },
  {
    question: "Is your team licensed and insured?",
    answer: "Yes. All of our contractors and technicians are fully licensed and insured to ensure safe, professional, and compliant service on every project.",
  },
  {
    question: "How do you handle historic property maintenance in Savannah?",
    answer: "Our team has extensive experience working with historic homes and buildings. We use careful methods and high-quality materials to preserve architectural integrity while performing needed maintenance or upgrades.",
  },
  {
    question: "What areas of Savannah do you service?",
    answer: "We serve the entire Savannah area and surrounding communities. If you're unsure whether you're within our service range, feel free to give us a call.",
  },
  {
    question: "How soon can you start once I book a service?",
    answer: "We do our best to offer prompt scheduling based on availability. For most services, we can get started within a few business days after your consultation.",
  },
  {
    question: "What makes Memorysmith different from other maintenance companies?",
    answer: "We combine affordability, attention to detail, and a deep respect for Savannah's historic charm. Our reliable, community-focused team goes the extra mile to ensure every job is completed with care and integrity.",
  },
  
]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
