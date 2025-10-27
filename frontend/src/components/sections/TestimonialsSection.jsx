export default function TestimonialsSection() {
  const users = [
    {
      name: "Sarah Chen",
      job: "Software Engineer, San Francisco",
      feedback: "⭐⭐⭐⭐⭐ (5/5)",
      description:
        "This app completely transformed how I manage my money. The visual reports are incredible - I finally understand where my money is going each month. I've already saved over $500 thanks to the budget alerts!",
    },
    {
      name: "Michael Rodriguez",
      job: "Freelancer, New York",
      feedback: "⭐⭐⭐⭐⭐ (5/5)",
      description:
        "As someone who works with multiple income streams, the multi-device sync is a game-changer. I can update expenses on my phone during the day and review everything on my laptop at night. It's seamless and so reliable.",
    },
    {
      name: "Emily Thompson",
      job: "Teacher, Chicago",
      feedback: "⭐⭐⭐⭐☆ (4.5/5)",
      description:
        "I've tried countless budgeting apps, but this one actually stuck. The interface is so intuitive and the expense tracking is effortless. The only reason it's not 5 stars is because I'm waiting for dark mode! Highly recommend.",
    },
    {
      name: "David Kim",
      job: "Student, Boston",
      feedback: "⭐⭐⭐⭐⭐ (5/5)",
      description:
        "Perfect for students on a tight budget! The category tracking helped me realize I was spending way too much on food delivery. Saved me from my own bad habits!",
    },
    {
      name: "Jessica Williams",
      job: "Marketing Manager, Austin",
      feedback: "⭐⭐⭐⭐⭐ (5/5)",
      description:
        "The security features gave me peace of mind to actually input all my financial data. I finally feel in control of my finances rather than overwhelmed by them.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Thousands of Users
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why our users love managing their finances with our app
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Stars */}
              <div className="text-2xl text-yellow-400 mb-4">
                {user.feedback}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{user.description}"
              </p>

              {/* User Info */}
              <div className="flex items-center">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{user.name}</h4>
                  <p className="text-gray-600 text-sm">{user.job}</p>
                </div>
              </div>

              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-200 text-6xl opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                "
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">$15M+</div>
            <div className="text-gray-600">Tracked</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
