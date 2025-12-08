export default function ServicesSection() {
  const services = [
    "Blood Tests",
    "Urine Analysis",
    "COVID-19 Testing",
    "Hormone Profile",
    "Radiology Scans",
  ];

  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
