import React from "react";
import Container from "./Container";
import Card from "./Card1";
import Card2 from "./Card2";
import SectionHeader from "./SectionHeader";
import {
  Home,
  Settings,
  Users,
  HardDrive,
  Activity,
  Zap,
  Globe,
  Search,
} from "lucide-react";
import IntegrationItem from "./IntegrationItem";

function Dashborard1() {
  const navItems = [
    { label: "Home", icon: Home, href: "#home" },
    { label: "Settings", icon: Settings, href: "#settings" },
    { label: "Teams", icon: Users, href: "#teams" },
    { label: "Storage", icon: HardDrive, href: "#storage" },
    { label: "Data Usage", icon: Activity, href: "#data-usage" },
    { label: "Intelligence", icon: Zap, href: "#intelligence" },
  ];

  return (
    <div>
      <div className="border border-b-gray-200">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pinimg.com/736x/bf/0d/7a/bf0d7a1302166b91035e9bf8dc49ded6.jpg"
              className="size-16 rounded-full object-cover"
              alt=""
            />

            <nav className="flex items-center text-gray-500">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-4xl border-neutral-500 px-4 py-2 font-medium transition hover:border hover:bg-gray-200 hover:text-gray-800"
                  >
                    <IconComponent size={20} />
                    <span className="text-lg font-medium">{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div>
            <a
              href="https://finc.com"
              className="flex items-center gap-2 rounded-4xl bg-gray-100 px-4 py-2 transition hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              <Globe size={20} />
              <span className="text-lg font-semibold">finc.com</span>
            </a>
          </div>
        </Container>
      </div>

      <div className="border-b border-gray-200">
        <Container className="flex items-center justify-between">
          <div className="flex flex-col gap-2 py-8">
            <div className="flex items-center gap-4">
              <SectionHeader
                title="AI Integrations"
                description="Streamline deployment and scale your software seamlessly with AI integration."
                showLearnMore={true}
              />
              <span className="mt-2 rounded-md bg-gray-800 px-2 py-1 text-[10px] text-white shadow-sm">
                NEW AI
              </span>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4 tracking-tight">
            <button className="rounded-4xl bg-neutral-800 px-5 py-2 text-white shadow-2xl hover:bg-neutral-500">
              Watch demo
            </button>
            <button className="rounded-4xl border border-neutral-300 bg-neutral-50 px-5 py-2 font-medium text-neutral-900 hover:bg-neutral-300">
              Learn more
            </button>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="relative mt-10 flex items-center justify-between overflow-hidden rounded-2xl bg-[linear-gradient(to_right,#0d7377,#d97706,#c026d3)] px-6 py-8 text-white">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Cutting edge Ai models</h1>
              <p className="text-sm">
                Correct your software with the cutting-edge technology.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="cursor-pointer rounded-4xl border border-neutral-300 bg-neutral-50 px-6 py-2 font-medium text-neutral-900 hover:bg-neutral-300">
                  Browser Integration
                </button>
                <button className="cursor-pointer rounded-4xl px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-200 hover:text-neutral-900">
                  Learn more
                </button>
              </div>
            </div>
            <div className="absolute -right-20 flex items-center gap-5">
              <Card
                src="https://i.pinimg.com/1200x/71/e5/ed/71e5edacdced21bdad944b9f545291bf.jpg"
                title="Anthropic"
                description="Custom assitance at scale."
              />
              <Card
                src="https://i.pinimg.com/1200x/b7/06/fa/b706fa17832e8854ee125404a655f0df.jpg"
                title="Meta Llama-3"
                description="Innovation through access."
              />
              <Card
                src="https://i.pinimg.com/736x/ac/96/28/ac9628739a227c79b213f47ab068b124.jpg"
                title="Perplexity"
                description="Effective and efficient AI for everyone."
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-5">
        <Container>
          <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-neutral-100 px-6 py-8 shadow-xl">
            <div className="relative flex flex-col gap-2">
              <SectionHeader
                title="Available integrations."
                description="Streamline deployment and scale your software seamlessly with AI integration."
              />

              <div className="absolute top-7 right-3">
                <button className="absolute top-0 -right-1 rounded-4xl border border-neutral-300 bg-neutral-50 px-3 py-1 text-xl font-medium text-neutral-900 shadow-2xl hover:bg-neutral-300">
                  {">"}
                </button>
                <button className="absolute top-0 right-14 rounded-4xl border border-neutral-300 bg-neutral-50 px-3 py-1 text-xl font-medium text-neutral-900 shadow-2xl hover:bg-neutral-300">
                  {"<"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <Card2
                src="https://i.pinimg.com/736x/50/e7/2f/50e72f26bf1d0d476c627ebbc181bcfd.jpg"
                title="Google AI"
                description="Build your own AI project."
              />
              <Card2
                src="https://i.pinimg.com/736x/7a/08/38/7a08384bbeac43c4bb71e17057f3608c.jpg"
                title="OpenAI"
                description="Innovation through access."
              />
              <Card2
                src="https://img.icons8.com/ios_filled/1200/replicate.jpg"
                title="Replicate"
                description="Deploy custom model at scale."
              />
              <Card2
                src="https://images.openai.com/static-rsc-3/e7nRT2sQR8OqpRBPX9Z5adv2wPscyY52rzmzgWWHg3xdQwI5tfwtpMf0EdeDadR3zmgU714QgTPvFjBVNodQ0fUPZASEfUYuA-MvqDipZOA?purpose=fullsize&v=1"
                title="Pinecone"
                description="Build remarkable applications."
              />
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-5">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-100 px-6 py-8 shadow-xl">
          <div className="relative flex justify-between">
            <div>
              <SectionHeader
                title="Current integrations."
                description="Manage your ready-to-use integration solutions and update the prefrence."
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                  All
                </button>
                <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200">
                  Copy
                </button>
                <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200">
                  Images
                </button>
                <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200">
                  Video
                </button>
                <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200">
                  Code
                </button>
                <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200">
                  Audio
                </button>
              </div>
              <button className="rounded-full p-2 text-gray-600 hover:bg-gray-200">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-neutral-200">
            <div>
              <IntegrationItem
                src="https://i.pinimg.com/736x/ec/ed/28/eced28073680ae57ab2adb5577373c13.jpg"
                circleSrc="https://i.pinimg.com/736x/1f/2f/d0/1f2fd00a027404f2eadcef4cd6111f48.jpg"
                title="Perplexity"
                category="Cloud platform"
                updatedTime="Updated 5d ago"
                onEdit={() => alert("Edit Perplexity integration")}
              />
              <IntegrationItem
                src="https://i.pinimg.com/1200x/1e/79/e1/1e79e16f538021ea5e1047b7a490f488.jpg"
                circleSrc="https://i.pinimg.com/736x/1f/93/95/1f939567d17ca585f0b54435175d0227.jpg"
                title="ChatGPT"
                category="Generative text"
                updatedTime="Updated 1h ago"
                onEdit={() => alert("Edit ChatGPT integration")}
              />
              <IntegrationItem
                src="https://i.pinimg.com/1200x/77/50/01/775001083a8b729e4e0726abf0be5ea7.jpg"
                circleSrc="https://i.pinimg.com/1200x/cc/48/1d/cc481d730ef702f69474798ac3c792b1.jpg"
                title="FaAI"
                category="Features & labels"
                updatedTime="Updated 23 ago"
                onEdit={() => alert("Edit FaAI integration")}
              />
              <IntegrationItem
                src="https://i.pinimg.com/736x/3e/76/43/3e7643ffb5fc538c75117946c4f71115.jpg"
                circleSrc="https://i.pinimg.com/1200x/da/9a/b8/da9ab8b4fa227fb53014cab21952e17a.jpg"
                title="Cohene"
                category="Chat & support"
                updatedTime="Updated 4h ago"
                onEdit={() => alert("Edit Cohene integration")}
              />
              <IntegrationItem
                src="https://i.pinimg.com/1200x/71/e5/ed/71e5edacdced21bdad944b9f545291bf.jpg"
                circleSrc="https://i.pinimg.com/736x/cb/1e/47/cb1e473e4cb3ccbcb9cfc7eef63ebb92.jpg"
                title="Claude"
                category="AI applications"
                updatedTime="Updated 24d ago"
                onEdit={() => alert("Edit Claude integration")}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashborard1;
