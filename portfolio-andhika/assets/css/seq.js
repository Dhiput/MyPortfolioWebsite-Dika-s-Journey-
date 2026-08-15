const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto("http://localhost:8123/index.html", { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(1500);
  await p.evaluate(() => { scrollTo(0,0); document.querySelectorAll(".trail").forEach(t=>t.remove()); });
  await p.waitForTimeout(400);
  const st = await p.$(".shot__stage"); const bx = await st.boundingBox();
  await st.screenshot({ path: "/home/claude/sq-0.png" });
  // hover from OUTSIDE the stage so no trail dots land on the photo
  await p.evaluate(() => document.querySelector(".shot__stage").dispatchEvent(new MouseEvent("mouseover",{bubbles:true})));
  await p.mouse.move(bx.x + bx.width - 4, bx.y + bx.height - 4);
  for (const [i,ms] of [[1,700],[2,700],[3,900],[4,1200]]) {
    await p.waitForTimeout(ms);
    await p.evaluate(() => document.querySelectorAll(".trail").forEach(t=>t.style.display="none"));
    await st.screenshot({ path: `/home/claude/sq-${i}.png` });
  }
  await b.close();
})();
