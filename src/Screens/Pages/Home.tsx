import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils/Constant";
import { Button } from "../../Components/CustomButton";
import {
    Code2, Smartphone, Cloud, Database,
    ArrowRight, CheckCircle2, TrendingUp,
    Users, Award, Zap
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Code2,
        title: "Software Development",
        description: "Custom software solutions tailored to your business needs",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: Smartphone,
        title: "Mobile Applications",
        description: "Native and cross-platform mobile apps for iOS and Android",
        gradient: "from-purple-500 to-purple-600"
    },
    {
        icon: Database,
        title: "SAP Solutions",
        description: "Enterprise resource planning and SAP implementation services",
        gradient: "from-amber-500 to-amber-600"
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description: "Scalable cloud infrastructure and migration solutions",
        gradient: "from-cyan-500 to-cyan-600"
    }
];

const stats = [
    { icon: Users, value: "500+", label: "Clients Worldwide" },
    { icon: Award, value: "50+", label: "Industry Awards" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
    { icon: Zap, value: "1000+", label: "Projects Delivered" }
];

export default function Home() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
                    <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block mb-6">
                                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                                    Leading IT Solutions Provider
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Transform Your
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Business </span>
                                with Technology
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                We deliver cutting-edge software solutions, mobile applications,
                                SAP implementations, and cloud services to drive your digital transformation.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to={createPageUrl("Contact")}>
                                    <Button size="lg" className="
      flex items-center justify-center 
      bg-gradient-to-r from-blue-600 to-cyan-500 
      hover:from-blue-700 hover:to-cyan-600 
      text-white shadow-lg shadow-blue-500/30 
      text-lg px-8
    ">
                                        Start Your Project
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link to={createPageUrl("Services")}>
                                    <Button size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                                        Explore Services
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30" />
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                                    alt="Team collaboration"
                                    className="relative rounded-3xl shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl mb-4">
                                    <stat.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                                <div className="text-slate-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Our Core Services
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Comprehensive IT solutions designed to accelerate your business growth
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-slate-200 hover:border-transparent hover:-translate-y-2">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link to={createPageUrl("Services")}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                            >
                                View All Services
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                                alt="Technology dashboard"
                                className="rounded-2xl shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                Why Choose TechVision?
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                We combine technical expertise with business acumen to deliver
                                solutions that drive real results.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Expert team with 15+ years of experience",
                                    "Cutting-edge technology stack",
                                    "Agile development methodology",
                                    "24/7 support and maintenance",
                                    "On-time delivery guarantee",
                                    "Cost-effective solutions"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        </div>
                                        <p className="text-slate-700 text-lg">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <Link to={createPageUrl("About")}>
                                    <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                                        Learn More About Us
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Start Your Digital Journey?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Let's discuss how we can help transform your business with technology
                        </p>
                        <div className="text-center mt-12">
                            <Link to={createPageUrl("Contact")} className="inline-block">
                                <Button
                                    size="lg"
                                    className="flex items-center justify-center bg-white text-blue-600 hover:bg-slate-100 text-lg px-8"
                                >
                                    Get in Touch
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