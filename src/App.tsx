import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Pricing } from '@/pages/Pricing';
import { Addons } from '@/pages/Addons';
import { AddonDetail } from '@/pages/AddonDetail';
import { Demos } from '@/pages/Demos';
import { DemoDetail } from '@/pages/DemoDetail';
import { Themes } from '@/pages/Themes';
import { ThemeDetail } from '@/pages/ThemeDetail';
import { Docs } from '@/pages/Docs';
import { Blogs } from '@/pages/Blogs';
import { Blog } from '@/pages/Blog';
import { BlogPost } from '@/pages/BlogPost';
import { Login } from '@/pages/Login';
import { Account } from '@/pages/Account';
import { About } from '@/pages/About';
import { Careers } from '@/pages/Careers';
import { Contact } from '@/pages/Contact';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { RefundPolicy } from '@/pages/RefundPolicy';
import { Roadmap } from '@/pages/Roadmap';
import { Affiliate } from '@/pages/Affiliate';
import { BrandAssets } from '@/pages/BrandAssets';
import { Testimonials } from '@/pages/Testimonials';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/addons" element={<Addons />} />
        <Route path="/addons/:id" element={<AddonDetail />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/demos/:slug" element={<DemoDetail />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/themes/:id" element={<ThemeDetail />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/brand-assets" element={<BrandAssets />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
