import Controller from '@ember/controller';
import { computed } from '@ember/object';
import NpmShimyShim from 'npm-shimy-shim';

export default Controller.extend({

  question: computed(function() { return NpmShimyShim.question; }),

  image: NpmShimyShim.image,

});
