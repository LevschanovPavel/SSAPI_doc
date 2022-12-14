
'use strict';

let flag_urls = {
  fl_145: "/res/_fs/build/no.084b240.png",
  fl_51: "/res/_fs/build/cl.5615947.png",
  fl_201: "/res/_fs/build/uy.f10f2fa.png",
  fl_17: "/res/_fs/build/al.fbde5f8.png",
  fl_31: "/res/_fs/build/by.3f9a3dd.png",
  fl_62: "/res/_fs/build/cz.b9b2362.png",
  fl_77: "/res/_fs/build/fr.f5e7288.png",
  fl_78: "/res/_fs/build/ga.39edd48.png",
  fl_98: "/res/_fs/build/it.225fa57.png",
  fl_61: "/res/_fs/build/cy.6bdaca3.png",
  fl_91: "/res/_fs/build/hu.a479892.png",
  fl_25: "/res/_fs/build/at.693357d.png",
  fl_83: "/res/_fs/build/gr.78093cc.png",
  fl_171: "/res/_fs/build/sk.8e660f7.png",
  fl_181: "/res/_fs/build/se.fdd164b.png",
  fl_195: "/res/_fs/build/ua.cbd8dc2.png",
  fl_225: "/res/_fs/build/lc.c9ec68c.png",
  fl_22: "/res/_fs/build/ar.dc93f45.png",
  fl_128: "/res/_fs/build/mx.0d2b73e.png",
  fl_200: "/res/_fs/build/us.98be361.png",
  fl_198: "/res/_fs/build/en.12159c6.png",
  fl_41: "/res/_fs/build/bg.a44eba3.png",
  fl_63: "/res/_fs/build/dk.d35eb12.png",
  fl_96: "/res/_fs/build/ie.94179e5.png",
  fl_97: "/res/_fs/build/il.7f37fd6.png",
  fl_116: "/res/_fs/build/lt.acdce25.png",
  fl_81: "/res/_fs/build/de.494bda8.png",
  fl_154: "/res/_fs/build/pl.78c2c39.png",
  fl_157: "/res/_fs/build/ro.1e7d5f5.png",
  fl_172: "/res/_fs/build/si.5007fc2.png",
  fl_182: "/res/_fs/build/ch.fc3c710.png",
  fl_207: "/res/_fs/build/wa.41aac5a.png",
  fl_170: "/res/_fs/build/sg.20c58cd.png",
  fl_39: "/res/_fs/build/br.ccca590.png",
  fl_152: "/res/_fs/build/pe.2033344.png",
  fl_153: "/res/_fs/build/ph.63e3103.png",
  fl_100: "/res/_fs/build/jp.95bdd3c.png",
  fl_32: "/res/_fs/build/be.35385b1.png",
  fl_59: "/res/_fs/build/hr.eed9ac8.png",
  fl_76: "/res/_fs/build/fi.4716002.png",
  fl_92: "/res/_fs/build/is.ad26002.png",
  fl_110: "/res/_fs/build/lv.0555c07.png",
  fl_139: "/res/_fs/build/nl.dede5ef.png",
  fl_155: "/res/_fs/build/pt.0e255ff.png",
  fl_158: "/res/_fs/build/ru.362b4e4.png",
  fl_199: "/res/_fs/build/sc.c794ec4.png",
  fl_176: "/res/_fs/build/es.ac54d02.png",
  fl_191: "/res/_fs/build/tr.2e7ac0b.png",
  fl_24: "/res/_fs/build/au.6b76ac9.png",
  fl_1: "/res/_fs/build/world.ee5f190.png",
  fl_02: "/res/_fs/build/world.ee5f190.png",
  fl_2: "/res/_fs/build/world.ee5f190.png",
  fl_3: "/res/_fs/build/world.ee5f190.png",
  fl_4: "/res/_fs/build/world.ee5f190.png",
  fl_5: "/res/_fs/build/world.ee5f190.png",
  fl_6: "/res/_fs/build/world.ee5f190.png",
  fl_7: "/res/_fs/build/world.ee5f190.png",
  fl_8: "/res/_fs/build/world.ee5f190.png",
  fl_290: "/res/_fs/build/world.ee5f190.png",
  fl_291: "/res/_fs/build/world.ee5f190.png",
  fl_292: "/res/_fs/build/world.ee5f190.png",
  fl_450: "/res/_fs/build/world.ee5f190.png",
  fl_451: "/res/_fs/build/world.ee5f190.png",
  fl_453: "/res/_fs/build/world.ee5f190.png",
  fl_53: "/res/_fs/build/co.7a52949.png",
  fl_47: "/res/_fs/build/ca.6cd0ddc.png",
  fl_52: "/res/_fs/build/cn.9bdf859.png",
  fl_167: "/res/_fs/build/rs.d2aad69.png",
  fl_118: "/res/_fs/build/mk.9709219.png",
  fl_85: "/res/_fs/build/gt.7e4860a.png",
  fl_73: "/res/_fs/build/ee.afc2553.png",
  fl_68: "/res/_fs/build/ec.2970c13.png",
  fl_57: "/res/_fs/build/cr.a7322ee.png",
  fl_37: "/res/_fs/build/ba.90ecd40.png",
  fl_175: "/res/_fs/build/za.23f7c64.png",
  fl_23: "/res/_fs/build/am.fa2215f.png",
  fl_69: "/res/_fs/build/eg.cd17604.png",
  fl_231: "/res/_fs/build/fo.116c508.png",
  fl_82: "/res/_fs/build/gh.7029ec7.png",
  fl_95: "/res/_fs/build/iq.dd6c327.png",
  fl_94: "/res/_fs/build/ir.6e9a381.png",
  fl_101: "/res/_fs/build/jo.d862974.png",
  fl_102: "/res/_fs/build/kz.a397872.png",
  fl_103: "/res/_fs/build/ke.fa367d2.png",
  fl_119: "/res/_fs/build/mg.af9180d.png",
  fl_121: "/res/_fs/build/my.1cc0279.png",
  fl_130: "/res/_fs/build/md.64a947d.png",
  fl_135: "/res/_fs/build/mz.490443e.png",
  fl_166: "/res/_fs/build/sn.1b15825.png",
  fl_144: "/res/_fs/build/nirl.e3833da.png",
  fl_183: "/res/_fs/build/sy.5994bd6.png",
  fl_194: "/res/_fs/build/ug.44bacb1.png",
  fl_185: "/res/_fs/build/tz.a3d163a.png",
  fl_187: "/res/_fs/build/tg.b6b6e1f.png",
  fl_18: "/res/_fs/build/dz.78a622e.png",
  fl_70: "/res/_fs/build/sv.19152ae.png",
  fl_90: "/res/_fs/build/hn.09306dd.png",
  fl_36: "/res/_fs/build/bo.cc19386.png",
  fl_222: "/res/_fs/build/hk.b81b5e1.png",
  fl_107: "/res/_fs/build/gaza.3974d2e.png",
  fl_117: "/res/_fs/build/lu.5d3fb95.png",
  fl_151: "/res/_fs/build/py.34efa61.png",
  fl_134: "/res/_fs/build/ma.29ceac8.png",
  fl_133: "/res/_fs/build/me.5bf8eb9.png",
  fl_156: "/res/_fs/build/qa.1aa4ee9.png",
  fl_124: "/res/_fs/build/mt.a804b88.png",
  fl_186: "/res/_fs/build/th.9816d71.png",
  fl_190: "/res/_fs/build/tn.71aa193.png",
  fl_26: "/res/_fs/build/az.d0ed7ba.png",
  fl_205: "/res/_fs/build/ve.a6b050a.png",
  fl_28: "/res/_fs/build/bh.6457f47.png",
  fl_80: "/res/_fs/build/ge.cfad8ee.png",
  fl_196: "/res/_fs/build/ae.885ad9e.png",
  fl_106: "/res/_fs/build/kr.9e0b226.png",
  fl_111: "/res/_fs/build/lb.1a858f1.png",
  fl_146: "/res/_fs/build/om.5e0d115.png",
  fl_206: "/res/_fs/build/vn.cff9735.png",
  fl_19: "/res/_fs/build/ad.945b07a.png",
  fl_46: "/res/_fs/build/cm.eed53ca.png",
  fl_178: "/res/_fs/build/sd.6670fcd.png",
  fl_93: "/res/_fs/build/in.aa3d441.png",
  fl_228: "/res/_fs/build/id.9ed9e2e.png",
  fl_114: "/res/_fs/build/ly.2005ada.png",
  fl_136: "/res/_fs/build/na.2a3bbb2.png",
  fl_208: "/res/_fs/build/ye.fbb6fbc.png",
  fl_202: "/res/_fs/build/uz.e9b0eea.png",
  fl_140: "/res/_fs/build/nz.5c9093b.png",
  fl_189: "/res/_fs/build/tt.f33c193.png",
  fl_210: "/res/_fs/build/zw.58b8e84.png",
  fl_165: "/res/_fs/build/sa.7924707.png",
  fl_20: "/res/_fs/build/ao.492aa49.png",
  fl_143: "/res/_fs/build/ng.06f6ef6.png",
  fl_197: "/res/_fs/build/uk.7bb55ee.png",
  fl_55: "/res/_fs/build/cg.63fc66e.png",
  fl_99: "/res/_fs/build/jm.6c4fa53.png",
  fl_131: "/res/_fs/build/mc.70c2614.png",
  fl_218: "/res/_fs/build/tw.46da9e2.png",
  fl_64: "/res/_fs/build/dj.29bb1ab.png",
  fl_149: "/res/_fs/build/pa.10fade4.png",
  fl_109: "/res/_fs/build/la.1c6ae80.png",
  fl_169: "/res/_fs/build/sl.cd854c8.png",
  fl_237: "/res/_fs/build/fr.f5e7288.png",
  fl_89: "/res/_fs/build/ht.b3c5b41.png",
  fl_177: "/res/_fs/build/lk.c51fd9b.png",
  fl_163: "/res/_fs/build/sm.1169b12.png",
  fl_66: "/res/_fs/build/do.0dff2a8.png",
  fl_29: "/res/_fs/build/bd.ecdd0f8.png",
  fl_147: "/res/_fs/build/pk.40b4b61.png",
  fl_48: "/res/_fs/build/cv.714c031.png",
  fl_60: "/res/_fs/build/cu.ec96c9f.png",
  fl_58: "/res/_fs/build/ci.a45222f.png",
  fl_209: "/res/_fs/build/zm.1115927.png",
  fl_123: "/res/_fs/build/ml.c1ee487.png",
  fl_79: "/res/_fs/build/gm.555aeae.png",
  fl_300: "/res/_fs/build/cw.5fdcf59.png",
  fl_42: "/res/_fs/build/bf.cb73454.png",
  fl_86: "/res/_fs/build/gn.f9eac3f.png",
  fl_71: "/res/_fs/build/gq.730bb22.png",
  fl_174: "/res/_fs/build/so.91e4212.png",
  fl_74: "/res/_fs/build/et.08efea7.png",
  fl_54: "/res/_fs/build/km.0b6f326.png",
  fl_21: "/res/_fs/build/ag.e7cdb90.png",
  fl_34: "/res/_fs/build/bj.6b536de.png",
  fl_56: "/res/_fs/build/cd.2e809bc.png",
  fl_159: "/res/_fs/build/rw.de4b2e2.png",
  fl_236: "/res/_fs/build/pr.5fbe2ec.png",
  fl_230: "/res/_fs/build/bm.0cb3e2f.png",
  fl_30: "/res/_fs/build/bb.f4df8e8.png",
  fl_50: "/res/_fs/build/ro.1e7d5f5.png",
  fl_180: "/res/_fs/build/sz.7505e38.png",
  fl_44: "/res/_fs/build/bi.af98ca0.png",
  fl_164: "/res/_fs/build/st.5ee027f.png",
  fl_112: "/res/_fs/build/ls.90e4378.png",
  fl_72: "/res/_fs/build/er.9e73f83.png",
  fl_49: "/res/_fs/build/cf.dcc3203.png",
  fl_113: "/res/_fs/build/lr.bf2f8be.png",
  fl_120: "/res/_fs/build/mw.607a24e.png",
  fl_45: "/res/_fs/build/kh.69bea05.png",
  fl_138: "/res/_fs/build/np.a66f257.png",
  fl_215: "/res/_fs/build/ps.4e76703.png",
  fl_16: "/res/_fs/build/af.908e3a8.png",
  fl_67: "/res/_fs/build/tp.40cc4bc.png",
  fl_192: "/res/_fs/build/tm.2516a8f.png",
  fl_233: "/res/_fs/build/mo.400a7dd.png",
  fl_43: "/res/_fs/build/bar.2aec239.png",
  fl_105: "/res/_fs/build/kp.dd18ef7.png",
  fl_184: "/res/_fs/build/tj.99338a3.png",
  fl_115: "/res/_fs/build/li.cf1a626.png",
  fl_88: "/res/_fs/build/gy.7358530.png",
  fl_243: "/res/_fs/build/ai.9564420.png",
  fl_84: "/res/_fs/build/gre.db634a8.png",
  fl_160: "/res/_fs/build/kn.c595035.png",
  fl_38: "/res/_fs/build/bw.6d3f887.png",
  fl_27: "/res/_fs/build/bs.0046b58.png",
  fl_33: "/res/_fs/build/bz.ce4fb5c.png",
  fl_35: "/res/_fs/build/bt.32b9e6f.png",
  fl_40: "/res/_fs/build/bn.06f09c0.png",
  fl_65: "/res/_fs/build/dm.ac15bba.png",
  fl_75: "/res/_fs/build/fj.a4b6288.png",
  fl_87: "/res/_fs/build/gw.64ecd8f.png",
  fl_104: "/res/_fs/build/ki.65ac58a.png",
  fl_108: "/res/_fs/build/kg.038e2d0.png",
  fl_122: "/res/_fs/build/mv.90aaf2a.png",
  fl_125: "/res/_fs/build/mh.e6ac142.png",
  fl_126: "/res/_fs/build/mr.91f1659.png",
  fl_127: "/res/_fs/build/mu.8f46fac.png",
  fl_129: "/res/_fs/build/fm.320ccff.png",
  fl_132: "/res/_fs/build/mn.c0d29db.png",
  fl_137: "/res/_fs/build/nr.483cd24.png",
  fl_141: "/res/_fs/build/ni.6f63d10.png",
  fl_142: "/res/_fs/build/ne.d9acc52.png",
  fl_148: "/res/_fs/build/pw.622e1b2.png",
  fl_150: "/res/_fs/build/pap.2af66ed.png",
  fl_161: "/res/_fs/build/vc.b1371bc.png",
  fl_162: "/res/_fs/build/sam.9a614f8.png",
  fl_168: "/res/_fs/build/sch.e2792c0.png",
  fl_173: "/res/_fs/build/sb.7100d6c.png",
  fl_179: "/res/_fs/build/sur.bea9c10.png",
  fl_188: "/res/_fs/build/to.4ce5d35.png",
  fl_203: "/res/_fs/build/vu.455ef8b.png",
  fl_204: "/res/_fs/build/va.271582a.png",
  fl_211: "/res/_fs/build/ge.cfad8ee.png",
  fl_223: "/res/_fs/build/cay.e976668.png",
  fl_229: "/res/_fs/build/aw.2eb48e2.png",
  fl_232: "/res/_fs/build/gu.0c95716.png",
  fl_234: "/res/_fs/build/ms.1575892.png",
  fl_238: "/res/_fs/build/tur.6996394.png",
  fl_239: "/res/_fs/build/an.72ac4a8.png",
  fl_241: "/res/_fs/build/an.72ac4a8.png",
  fl_242: "/res/_fs/build/as.86cea2f.png",
  fl_244: "/res/_fs/build/ck.aca218c.png",
  fl_245: "/res/_fs/build/nc.32d2ca5.png",
  fl_304: "/res/_fs/build/gi.3f12cf6.png",
  fl_212: "/res/_fs/build/xk.f33f86b.png",
  fl_226: "/res/_fs/build/pf.bacf384.png",
  fl_305: "/res/_fs/build/im.7c0bba7.png",
  fl_407: "/res/_fs/build/ss.42e0849.png",
  fl_240: "/res/_fs/build/vi.d4f10f9.png",
  fl_254: "/res/_fs/build/zanz.3488375.png",
  fl_255: "/res/_fs/build/fr.f5e7288.png",
  fl_256: "/res/_fs/build/fr.f5e7288.png",
  fl_259: "/res/_fs/build/nu.3869da7.png",
  fl_287: "/res/_fs/build/pf.bacf384.png",
  fl_452: "/res/_fs/build/je.0903b51.png",
  fl_483: "/res/_fs/build/gl.e4c275b.png",
  fl_495: "/res/_fs/build/gue.bcc1ba1.png",
  fl_496: "/res/_fs/build/cat.df46672.png",
};

module.exports =
        Object.freeze(flag_urls); 