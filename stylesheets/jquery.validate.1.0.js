(function($) {
	var error = function(msg) {
		alert("jquery.validate终止运行：\n" + msg);
	}
	var selectErrorMessage = function(ps, def, index) {
		if (ps.length <= index) {
			return def;
		} else {
			return ps[index];
		}
	}
	var visualLength = function(txt,size){
		var id = "#summer-visualLength-"+Math.random();
		var span = $("<span></span>").attr("id",id).html(txt).css({visibility:'hidden','white-space':'nowrap','font-size': size});
		$("html>body").append(span);
		var w = span.outerWidth();
		span.remove();
		return w;
	}
	$.fn.validateTagValueFunction = {
		'*': function(target) {
			return target.val();
		}
	}
	$.fn.validateFunction = {
		'#': {
			def: '必填',
			func: function(val, ps, def) {
				if (val == null || val == '') {
					return selectErrorMessage(ps, def, 0);
				}

			}
		},
		'#email': {
			def: '请输入正确的邮箱地址',
			func: function(val, ps, def) {
				if (!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(val)) {
					return selectErrorMessage(ps, def, 0);
				}
			}
		},
		'#url': {
			def: '请输入正确的URL地址',
			func: function(val, ps, def) {
				if (!/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(val)) {
					return selectErrorMessage(ps, def, 0);
				}

			}
		},
		'#date': {
			def: '请输入正确的日期',
			func: function(val, ps, def) {
				if (/Invalid|NaN/.test(new Date(value).toString())) {
					return selectErrorMessage(ps, def, 0);
				}
			}
		},
		'#dateISO': {
			def: '请输入正确的日期',
			func: function(val, ps, def) {
				if (!/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(val)) {
					return selectErrorMessage(ps, def, 0);
				}
			}
		},
		'#number': {
			def: '请输入数字',
			func: function(val, ps, def) {
				if (!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(val)) {
					return selectErrorMessage(ps, def, 0);
				}
			}
		},
		'#digits': {
			def: '请输入整数',
			func: function(val, ps, def) {
				if (!/^\d+$/.test(val)) {
					return selectErrorMessage(ps, def, 0);
				}
			}
		},
		'#creditcard': {
			def: '请输入正确信用卡号',
			func: function(val, ps, def) {
				if (/[^0-9 \-]+/.test(val)) {
					return selectErrorMessage(ps, def, 0);
				}
				var nCheck = 0,
					nDigit = 0,
					bEven = false;

				val = val.replace(/\D/g, "");

				for (var n = val.length - 1; n >= 0; n--) {
					var cDigit = val.charAt(n);
					nDigit = parseInt(cDigit, 10);
					if (bEven) {
						if ((nDigit *= 2) > 9) {
							nDigit -= 9;
						}
					}
					nCheck += nDigit;
					bEven = !bEven;
				}
				if (!((nCheck % 10) === 0)) {
					return selectErrorMessage(ps, def, 0)
				}
			}
		},
		'#minlength': {
			def: '输入内容长度需超过{0}',
			func: function(val, ps, def) {
				if (ps.length < 1) {
					error("#minlength至少需要一个数字参数");
					return;
				}
				if (val.length < parseInt(ps[0])) {
					return selectErrorMessage(ps, def, 1)
				}
			}
		},
		'#maxlength': {
			def: '输入内容长度不得超过{0}',
			func: function(val, ps, def) {
				if (ps.length < 1) {
					error("#maxlength至少需要一个数字参数");
					return;
				}
				if (val.length > parseInt(ps[0])) {
					return selectErrorMessage(ps, def, 1)
				}
			}
		},
		'#fixedlength': {
			def: '输入内容长度需在{0}位数',
			func: function(val, ps, def) {
				if (ps.length < 1) {
					error("#ixedlength至少需要1个数字参数");
					return;
				}
				if (val.length != parseInt(ps[0])) {
					return selectErrorMessage(ps, def, 2).replace('\{0\}', ps[0]);
				}
			}
		},
		'#rangelength': {
			def: '输入内容长度需在{0}-{1}之间',
			func: function(val, ps, def) {
				if (ps.length < 2) {
					error("#rangelength至少需要2个数字参数");
					return;
				}
				if (val.length < parseInt(ps[0]) || val.length > parseInt(ps[1])) {
					return selectErrorMessage(ps, def, 2).replace('\{0\}', ps[0]).replace('\{1\}', ps[1]);
				}
			}
		},
		'#telephone': {
			def: '请输入正确的手机号码',
			func: function(val, ps, def) {
				if (!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/i.test(val)) {
					return selectErrorMessage(ps, def, 0);
				}
			}
		},
		'#equalTo': {
			def: '',
			func: function(val, ps, def) {
				if (ps.length < 2) {
					error("#equalTo至少需要2个参数");
					return;
				}
				if (val != $(ps[0]).tagValue()) {
					return ps[1];
				}
			}
		},
		'#regex': {
			def: '输入值校验不成功',
			func: function(val, ps, def) {
				if (ps.length < 2) {
					error("#regex 至少需要1个参数");
					return;
				}
				var regexp = new RegExp(ps[0]);
				if (!regexp.test(val)) {
					return selectErrorMessage(ps, def, 1);
				}
			}
		}
	}
	$.extend({
		validate: function(val, array) {
			if (!$.isArray(array)) {
				error("参数应为字符串数组");
				return;
			}
			if (array.length == 0) {
				error("参数不能为空");
				return;
			}
			if (array[0].indexOf('#') != 0) {
				error("第一个参数应该以#开头");
				return;
			}
			var opts = [];
			var index = -1;
			for (var i in array) {
				var p = array[i];
				if ((p + "").indexOf('#') == 0) {
					if ($.isEmptyObject($.fn.validateFunction[(p + "")])) {
						error("指令不存在：" + p);
						return;
					}
					opts.push({
						cmd: p,
						ps: [],
						obj: $.fn.validateFunction[(p + "")]
					})
					index++;
				} else {
					opts[index].ps.push(p);
				}
			}
			for (var i in opts) {
				var opt = opts[i];
				if (opt.cmd != '#' && (val == null || val == '')) {
					return;
				}
				var r = opt.obj.func(val, opt.ps, opt.obj.def);
				if (r) {
					return r;
				}
			}
		}
	});
	$.fn.validate = function(options) {
		var array = [];
		this.each(function(i) {
			var val = $(this).tagValue();
			array[i] = $.validate(val, options);
		});
		return array;
	};
	$.fn.tagValue = function() {
		var valFunc = $.fn.validateTagValueFunction['*'];
		if (!$.isEmptyObject($.fn.validateTagValueFunction[this.tagName])) {
			valFunc = $.fn.validateTagValueFunction[this.tagName];
		}
		return valFunc($(this));
	};
	$.fn.name = function(options) {
		return $(this).find("[name=" + options + "]");
	};
	$.fn.dataform = function(opts) {
		var defOpts = {
			url: null,
			data: null,
			rules: {},
			error: function(el, msg) {},
			tip: function(el, msg){
				var parent = el.parent();
				parent.css('position','relative');
				var error = $('<span class="'+errorMsgClass+'" style="color:red;display:block;position:absolute; border:1px solid #f0f0f0; background:#fff; border-radius:3px; padding:0px 5px; box-shadow: 1px 1px 10px rgba(0,0,0,.2);"></span>');
				var left = el.offset().left-parent.offset().left+el.outerWidth()+10;
				var top = el.offset().top-parent.offset().top;
				error.width(visualLength(msg, 12)+12);
				error.height(el.outerHeight()-2);
				error.css('top',top);
				error.css('left',left-3);
				error.css('font-size',12);
				error.css('line-height',el.outerHeight()-4+'px');
				parent.append(error.html(msg));
			},
			proxy: function(url, data) {}
		}
		opts = $.extend(true, defOpts, opts);
		var isForm = $(this).is('form');
		var form = isForm ? $(this) : $(this).parents('form');
		for(var i in opts.rules) {
			var rule = opts.rules[i];
			var el = form.name(i);
			var result = el.validate(rule);
			var parent = el.parent();
			var errorMsgClass = 'validate-form-error-message';
			parent.find('.'+errorMsgClass).remove();
			for(var z in result) {
				if(result[z]) {
					opts.tip(el, result[z]);
					opts.error(el, result[z]);
					return;
				}
			}
		}
		var data = opts.data == null ? form.serialize() : opts.data;
		var url = opts.url == null ? form.attr('action') : opts.url;
		if(url == null || url == '') {
			error('请求url不能为空');
			return;
		}
		opts.proxy(url, data);
	};
})(jQuery);
