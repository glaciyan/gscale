<script setup lang="ts">
import PageContainer from "../components/PageContainer";
</script>

<template>
  <PageContainer size="sm">
    <div class="markdown-body">
      <h1 id="gscale-privacy">GScale Privacy</h1>
      <h2 id="how-are-builds-saved-">How are builds saved?</h2>
      <p>
        Builds are saved on your device. This might change in the future with additional feature additions like a
        potential account sync feature, those features are going to be opt-in.
      </p>
      <h2 id="what-kind-of-analytics-does-this-site-use-">What kind of analytics does this site use?</h2>
      <p>
        gscale.cc uses Cloudflare Analytics. The following data is collected anonymously. The purpose of collecting said
        data will also be explained.
      </p>
      <p><strong>Visits</strong> are counted to determine various things.</p>
      <ul>
        <li><strong>Visit by country</strong>: To help determine if localization is needed.</li>
        <li><strong>Referrers</strong>: To help find websites which might contain feedback.</li>
        <li><strong>Hosts</strong>: This is always gscale.cc and is not relevant.</li>
        <li><strong>Paths</strong>: Helps to determine the popularity of certain characters.</li>
        <li>
          <strong>Operating system, Browser and Device type</strong>: Can help determine if gscale.cc can use modern web
          technologies which might not be supported on older systems and helps determine if a feature needs better
          mobile support.
        </li>
      </ul>
      <p>
        <strong>Page Visits</strong> are counted to determine the popularity of certain characters.<br /><strong
          >Page load time and Core Web Vitals (LCP, FID and CLS)</strong
        >
        are collected to determine the performance of gscale.cc.
      </p>
      <p>
        Cloudflare retains this data for 30 days.<br />To learn more about Cloudflare Analytics please visit
        <a href="https://developers.cloudflare.com/analytics/web-analytics">the documentation</a>.
      </p>
      <p>That&#39;s it, thank you very much.<br /><em>glaciyan</em></p>
    </div>
  </PageContainer>
</template>

<style lang="less">
.markdown-body {
  h1 {
    @apply text-3xl my-4 font-bold text-light-important;
  }
  h2 {
    @apply text-lg font-bold mt-6 mb-1 text-light-important;
  }
  p {
    @apply text-light-normal mb-4 tracking-wide leading-relaxed;
  }
  strong {
    @apply font-bold;
  }
  ul {
    @apply list-disc ml-8 p-0 mx-4 mb-4 space-y-2;
  }
  a {
    @apply text-blue-400 hover:underline;
  }
}
</style>
