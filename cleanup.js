const cleanupCSS = () => {
    const unusedSelectors = [];
    const stylesheets = Array.from(document.styleSheets);

    // 1. Find your specific stylesheet
    const megaCSS = document.getElementById('mega-style').sheet;

    if (!megaCSS) {
        console.error("mega.css not found!");
        return;
    }

    // 2. Get all rules from the stylesheet
    const rules = Array.from(megaCSS.cssRules);

    rules.forEach(rule => {
        // We only care about standard style rules (ignoring @media, @keyframes for now)
        if (rule.selectorText) {
            const selector = rule.selectorText;

            // 3. Check if the selector exists in the current HTML
            try {
                const isUsed = document.querySelector(selector) !== null;
                
                if (!isUsed) {
                    unusedSelectors.push(selector);
                }
            } catch (e) {
                console.warn(`Could not parse selector: ${selector}`);
            }
        }
    });

    // 4. Report the findings
    if (unusedSelectors.length > 0) {
        console.log("Found the slop! These selectors are NOT used in your HTML:");
        console.table(unusedSelectors);
    } else {
        console.log("Your CSS is perfectly clean!");
    }
};

// Run after the page fully loads
window.onload = cleanupCSS;