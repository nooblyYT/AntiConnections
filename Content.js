function replaceText(node) {
if (node.nodeType === Node.TEXT_NODE) {
if (node.textContent.includes("Connections")) {
node.textContent = node.textContent.replace(/Connections/g, "Friends");
}
} else {
node.childNodes.forEach(replaceText);
}
}

// Initial replace on page load
replaceText(document.body);

// Also observe changes in case the page dynamically loads content
const observer = new MutationObserver(() => {
replaceText(document.body);
});

observer.observe(document.body, { childList: true, subtree: true });
