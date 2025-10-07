import React from "react";
import {
    Code2, Smartphone, Database, Cloud,
    Settings, BarChart3, Shield, Boxes,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../Components/CustomButton";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils/Constant";

const services = [
    {
        icon: Code2,
        title: "Custom Software Development",
        description: "Tailored software solutions built from the ground up to meet your unique business requirements. Our expert developers use the latest technologies and best practices to create scalable, maintainable applications.",
        features: ["Web Applications", "Enterprise Software", "API Development", "Legacy Modernization"],
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps for iOS and Android that engage users and drive business growth.",
        features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
        gradient: "from-purple-500 to-purple-600"
    },
    {
        icon: Database,
        title: "SAP Solutions",
        description: "Comprehensive SAP implementation, customization, and support services. We help enterprises leverage SAP to streamline operations and improve efficiency.",
        features: ["SAP Implementation", "SAP S/4HANA", "SAP Consulting", "SAP Integration"],
        gradient: "from-amber-500 to-amber-600"
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description: "End-to-end cloud solutions including migration, infrastructure setup, and optimization. We help businesses leverage the power of cloud computing for scalability and cost efficiency.",
        features: ["AWS Services", "Azure Solutions", "Cloud Migration", "DevOps"],
        gradient: "from-cyan-500 to-cyan-600"
    },
    {
        icon: Settings,
        title: "IT Consulting",
        description: "Strategic technology consulting to align IT with your business goals. Our experts provide guidance on digital transformation, architecture design, and technology selection.",
        features: ["Digital Strategy", "Tech Architecture", "System Design", "Best Practices"],
        gradient: "from-green-500 to-green-600"
    },
    {
        icon: BarChart3,
        title: "Business Intelligence",
        description: "Transform your data into actionable insights with our BI solutions. We implement analytics platforms and create custom dashboards for data-driven decision making.",
        features: ["Data Analytics", "Power BI", "Custom Dashboards", "Reporting Solutions"],
        gradient: "from-indigo-500 to-indigo-600"
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Protect your digital assets with our comprehensive security services. We implement robust security measures and conduct regular assessments to keep your systems safe.",
        features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
        gradient: "from-red-500 to-red-600"
    },
    {
        icon: Boxes,
        title: "Product Development",
        description: "Full-cycle product development from ideation to launch. We help startups and enterprises bring innovative software products to market.",
        features: ["MVP Development", "Product Design", "Quality Assurance", "Product Launch"],
        gradient: "from-pink-500 to-pink-600"
    }
];

export default function Services() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-0 right-0" />
                    <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 left-0" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Comprehensive IT solutions designed to drive innovation and accelerate your business growth
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 h-full border border-slate-200 hover:border-transparent hover:-translate-y-1">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <Link to={createPageUrl("Contact")}>
                                        <Button variant="ghost" className="group-hover:bg-blue-50 group-hover:text-blue-600">
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-slate-600 mb-8">
                            Let's discuss how our services can help you achieve your goals
                        </p>
                        <div className="text-center mt-12">
                            <Link to={createPageUrl("Contact")}  className="inline-block">
                                <Button size="lg" className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30">
                                    Get Started Today
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
}