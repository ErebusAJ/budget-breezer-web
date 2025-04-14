
import { Smartphone, PieChart, Users, CreditCard, Receipt, BanknoteIcon } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-brand-teal" />,
    title: "Easy Expense Tracking",
    description: "Log expenses on the go, categorize them, and stay on top of your spending habits.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-brand-teal" />,
    title: "Insightful Analytics",
    description: "Get visual breakdowns of your spending patterns to make smarter financial decisions.",
  },
  {
    icon: <Users className="h-8 w-8 text-brand-teal" />,
    title: "Split Bills Instantly",
    description: "Create groups for trips, roommates or events and split expenses fairly among everyone.",
  },
  {
    icon: <BanknoteIcon className="h-8 w-8 text-brand-teal" />,
    title: "Record Cash Payments",
    description: "Keep track of cash transactions between friends without the hassle of physical records.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-brand-teal" />,
    title: "Send Money Directly",
    description: "Transfer funds to friends via cards, UPI, or internet banking with Razorpay integration.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-brand-teal" />,
    title: "Balance Tracking",
    description: "See who owes what at a glance and send friendly reminders for pending payments.",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-brand-darkGray">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Smart Features</span> for Everyday Finances
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Budget Breezer combines powerful features that make managing personal and shared expenses effortless.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-brand-darkerGray p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-white/5 inline-flex p-3 rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
