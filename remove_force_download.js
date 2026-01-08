function processLink(link) {
  try {
    const url = new URL(link.href);

    if (url.searchParams.has("forcedownload")) {
      url.searchParams.delete("forcedownload");
      link.href = url.toString();
    }
  } catch (e) {}
}

function processLinks(links) {
  for (const link of links) {
    processLink(link);
  }
}

processLinks(document.querySelectorAll('a[href*="forcedownload"]'));

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType !== Node.ELEMENT_NODE) {
        continue;
      }

      if (node.tagName === "A") {
        processLink(node);
      }

      if (node.querySelectorAll) {
        const links = node.querySelectorAll('a[href*="forcedownload"]');
        processLinks(links);
      }
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
