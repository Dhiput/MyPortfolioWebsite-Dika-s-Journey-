const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto("http://localhost:8123/index.html", { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(1500);
  await p.addStyleTag({ content: ".trail{display:none !important}" });
  await p.evaluate(() => scrollTo(0,0));
  await p.waitForTimeout(400);
  const st = await p.$(".shot__stage"); const bx = await st.boundingBox();
  await st.screenshot({ path: "/home/claude/sq-0.png" });
  await p.mouse.move(bx.x + bx.width*0.5, bx.y + bx.height*0.45);
  for (const [i,ms] of [[1,600],[2,600],[3,800],[4,1400]]) {
    await p.waitForTimeout(ms);
    await st.screenshot({ path: `/home/claude/sq-${i}.png` });
  }
  const hov = await p.evaluate(() => getComputedStyle(document.querySelector(".shot__tri")).opacity);
  console.log("tri opacity at end:", hov);
  await b.close();
})();
