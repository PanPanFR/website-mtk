const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report-prod.json', 'utf8'));

const scores = {
    Performance: report.categories.performance.score * 100,
    Accessibility: report.categories.accessibility.score * 100,
    BestPractices: report.categories['best-practices'].score * 100,
    SEO: report.categories.seo.score * 100,
};

const metrics = {
    FCP: report.audits['first-contentful-paint'].displayValue,
    LCP: report.audits['largest-contentful-paint'].displayValue,
    CLS: report.audits['cumulative-layout-shift'].displayValue,
    TBT: report.audits['total-blocking-time'].displayValue,
    SpeedIndex: report.audits['speed-index'].displayValue,
};

console.log('=== Production Lighthouse Scores ===');
console.log(JSON.stringify(scores, null, 2));
console.log('=== Core Web Vitals ===');
console.log(JSON.stringify(metrics, null, 2));
