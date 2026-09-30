import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceDetailClient } from "./ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | DevCraft" };

  return {
    title: `${service.title} | Production Engineering | DevCraft`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | DevCraft`,
      description: service.shortDesc,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const allServices = servicesData.map((s) => ({
    slug: s.slug,
    title: s.title,
  }));

  return <ServiceDetailClient service={service} allServices={allServices} />;
}
