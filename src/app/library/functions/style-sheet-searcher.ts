export function styleSheetSearcher(pattern: RegExp, groupName?: string) {
  let st = document.styleSheets;
  for (let k in st) {
    if (st[k].cssRules) {
      if (st[k].cssRules.length > 0) {
        let rules = st[k]?.cssRules;
        for (let r in rules) {
          if (typeof rules[r]?.cssText == 'string') {
            if (pattern.test(rules[r].cssText)) {
              let match = rules[r].cssText.match(pattern)
              if(match?.groups && groupName) {
                return match.groups[groupName];
              }
              return match
            }
          }
        }
      }
    }
  }
  return 0;
}
