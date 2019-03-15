function ev(selector, name, func) {
  const list = document.querySelectorAll(selector);
  Array.prototype.forEach.call(list, function(element) {
    element.addEventListener("click", func, false);
  });
}

ev("body", "mousemove", function(event) {
  seeder.seed(event);
});

ev("#currency", "change", function() {
  janin.useCurrency(this.selectedIndex);
});

ev("#menu div", "click", function() {
  tabSwitch(this);
});

ev("#generatekeyinput", "keypress", function(event) {
  seeder.seedKeyPress(event);
});

ev("#seedSkipper a", "click", function() {
  seeder.seedCount = seeder.seedLimit;
  seeder.seed();
});

ev("#newaddress", "click", function() {
  singlewallet.generateNewAddressAndKey();
});

ev("#singleprint", "click", function() {
  window.print();
});

ev("#securitystep7 a", "click", function() {
  tabSwitch(document.getElementById("donate"));
});

ev("#faqLink1", "click", function() {
  toggleFaqQuestion("faqQuestion1");
  toggleFaqQuestion("faqQuestion1.1");
});

ev("#faqLink2", "click", function() {
  toggleFaqQuestion("faqQuestion2");
});

ev("#faqLink3", "click", function() {
  toggleFaqQuestion("faqQuestion3");
});

ev("#faqLink4", "click", function() {
  toggleFaqQuestion("faqQuestion4");
});

ev("#faqLink5", "click", function() {
  toggleFaqQuestion("faqQuestion5");
});

ev("#faqLink6", "click", function() {
  toggleFaqQuestion("faqQuestion6");
});

ev("#faqLink7", "click", function() {
  toggleFaqQuestion("faqQuestion7");
});

ev("#faqLink8", "click", function() {
  toggleFaqQuestion("faqQuestion8");
});

ev("#faqLink9", "click", function() {
  toggleFaqQuestion("faqQuestion9");
});

ev("#faqLink10", "click", function() {
  toggleFaqQuestion("faqQuestion10");
});

ev("#faqLink11", "click", function() {
  toggleFaqQuestion("faqQuestion11");
});

ev("#faqLink12", "click", function() {
  toggleFaqQuestion("faqQuestion12");
});

ev("#paperlabelencrypt", "change", function() {
  paperwallet.toggleEncrypt(this);
});

ev("#addresstype", "change", function() {
  paperwallet.publicMode = this.selectedIndex;
});

ev("#papergenerate[value='Randomly generate']", "click", function() {
  paperwallet.build(document.getElementById("paperpassphrase").value);
});

ev("#papergenerate[value^='Apply']", "click", function() {
  paperwallet.testAndApplyVanityKey();
});

ev("#paperprint", "click", function() {
  window.print();
});

ev("#singleprint", "click", function() {
  printMany();
});

ev("#bulkgenerate", "click", function() {
  bulkwallet.buildCSV(
    document.getElementById("bulklimit").value * 1,
    document.getElementById("bulkstartindex").value * 1,
    document.getElementById("bulkcompressed").checked
  );
});

ev("#brainpassphrase", "focus", function() {
  this.select();
});

ev("#brainpassphrase", "keypress", function(event) {
  if (event.keyCode == 13) {
    ninja.wallets.brainwallet.view();
  }
});

ev("#brainpassphraseshow", "change", function() {
  brainwallet.showToggle(this);
});

ev("#brainprint", "click", function() {
  window.print();
});

ev("#brainpassphraseconfirm", "focus", function() {
  this.select();
});

ev("#brainpassphraseconfirm", "keypress", function() {
  if (event.keyCode == 13) {
    brainwallet.view();
  }
});

ev("#brainview", "click", function() {
  brainwallet.view();
});

ev("#detailprivkey", "focus", function() {
  this.select();
});

ev("#detailprivkey", "keypress", function() {
  if (event.keyCode == 13) {
    detailwallet.viewDetails();
  }
});

ev(".qrcodeinputwrapper img", "click", function() {
  detailwallet.qrscanner.start();
});

ev("#detailview", "click", function() {
  detailwallet.viewDetails();
});

ev("#detailprint", "click", function() {
  window.print();
});

ev("#paperqrscanner #mainbody button", "click", function() {
  detailwallet.qrscanner.stop();
});

ev("#detaillabelpassphrase", "focus", function() {
  this.select();
});

ev("#detaillabelpassphrase", "keypress", function() {
  if (event.keyCode == 13) {
    detailwallet.viewDetails();
  }
});

ev("#detaildecrypt", "click", function() {
  detailwallet.viewDetails();
});

// resume at line 477
