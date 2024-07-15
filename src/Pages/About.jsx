/* eslint-disable react/no-unescaped-entities */

const About = () => {
  return (
    <div>
        <div className="container mx-auto p-6">
      {/* Introduction Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About Our Store</h1>
        <p className="text-gray-700">
          Welcome to our Inventory Store! We are dedicated to providing the best products and services to meet your needs. With years of experience in the industry, we offer a wide range of items at competitive prices.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Features</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Wide range of products
          </li>
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Competitive pricing
          </li>
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Fast and reliable shipping
          </li>
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Excellent customer service
          </li>
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Easy returns and exchanges
          </li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <img src="/src/assets/myteam/one (4).jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-2 object-cover" />
            <h3 className="font-bold">John Doe</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/myteam/one (2).jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-2 object-cover" />
            <h3 className="font-bold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="text-center">
            <img src="/src/assets/myteam/one (1).jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-2 object-cover" />
            <h3 className="font-bold">Alice Johnson</h3>
            <p className="text-gray-600">COO</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-gray-700">"Fantastic service! The products are top-notch and the delivery was super quick."</p>
            <p className="text-gray-600 text-right">- Emily R.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-gray-700">"I love shopping here. The prices are unbeatable and the customer support is very helpful."</p>
            <p className="text-gray-600 text-right">- Michael B.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-gray-700">"Great selection of products. I always find what I need and more!"</p>
            <p className="text-gray-600 text-right">- Sarah K.</p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">2000</h3>
            <p className="text-gray-700">Our store was founded with a mission to provide high-quality products to customers worldwide.</p>
          </div>
          <div>
            <h3 className="font-bold">2005</h3>
            <p className="text-gray-700">We expanded our product line and started offering more categories to meet the growing demands.</p>
          </div>
          <div>
            <h3 className="font-bold">2010</h3>
            <p className="text-gray-700">Introduced our e-commerce platform, making it easier for customers to shop online.</p>
          </div>
          <div>
            <h3 className="font-bold">2020</h3>
            <p className="text-gray-700">Celebrated our 20th anniversary with a major rebranding and new customer loyalty programs.</p>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission and Values</h2>
        <p className="text-gray-700 mb-4">Our mission is to provide high-quality products at competitive prices while ensuring exceptional customer service. We are committed to sustainability, innovation, and community engagement.</p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Customer Satisfaction
          </li>
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Integrity and Transparency
          </li>
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Sustainability
          </li>
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Innovation
          </li>
          <li className="flex items-center">
            <span className="text-indigo-500 mr-2">✔</span>
            Community Engagement
          </li>
        </ul>
      </section>

      {/* Partners Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/src/assets/myteam/one (1).jpg" alt="Partner Logo" className="h-[300px] object-cover" />
          <img src="/src/assets/myteam/one (2).jpg" alt="Partner Logo" className="h-[300px] object-cover" />
          <img src="/src/assets/myteam/one (3).jpg" alt="Partner Logo" className="h-[300px] object-cover" />
          <img src="/src/assets/myteam/one (4).jpg" alt="Partner Logo" className="h-[300px] object-cover" />
        </div>
      </section>
    </div>
    </div>
  )
}

export default About
