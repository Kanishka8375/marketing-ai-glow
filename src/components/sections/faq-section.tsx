import { FAQItem } from "@/components/ui/faq-item";
import { SectionContainer } from "@/components/ui/section-container";

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our advanced AI models are trained on millions of high-performing marketing campaigns and brand content. Simply input your brand guidelines and campaign objectives, and our AI will generate compelling copy, visuals, and strategies tailored to your specific needs.",
    defaultOpen: true
  },
  {
    question: "Can I integrate ADmyBRAND with my existing tools?",
    answer: "Yes! ADmyBRAND integrates seamlessly with over 100+ popular marketing tools including Google Ads, Facebook Ads Manager, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations."
  },
  {
    question: "What kind of analytics and reporting do you provide?",
    answer: "We provide comprehensive real-time analytics including campaign performance metrics, audience insights, ROI tracking, predictive analytics, and custom dashboards. Our AI also provides actionable recommendations to optimize your campaigns automatically."
  },
  {
    question: "How secure is my data with ADmyBRAND?",
    answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, GDPR compliance, and regular security audits. Your data is stored securely and never shared with third parties. We also offer on-premise deployment for enterprise customers."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Absolutely! You can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you'll retain access to all your created content and data."
  },
  {
    question: "Do you offer training and onboarding support?",
    answer: "Yes! All plans include comprehensive onboarding, training materials, and ongoing support. Professional and Enterprise plans include dedicated account managers and live training sessions to ensure your team gets the most out of ADmyBRAND."
  }
];

export function FAQSection() {
  return (
    <SectionContainer>
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-6">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={faq.defaultOpen}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-6">
          Still have questions? We're here to help.
        </p>
        <button className="btn-secondary">
          Contact Support
        </button>
      </div>
    </SectionContainer>
  );
}