import express from "express";
import { aboutRouter } from "../modules/about/about.route";
import { advertiseRouter } from "../modules/advertise/advertise.route";
import { bannerRouter } from "../modules/banner/banner.route";
import { blogRouter } from "../modules/blog/blog.route";
import { eventRoute } from "../modules/event/event.route";
import { galleryRoute } from "../modules/gallery/gallery.route";
import { memberRoute } from "../modules/members/member.route";
import { likeRoute } from "../modules/likes/likes.route";
import { commentRouter } from "../modules/comments/comments.route";
import { jwtRouter } from "../../shared/varifyJwt.route";
import { paymentRoute } from "../modules/payment/payment.route";
import { workRouter } from "../modules/works/works.router";
import { heroRouter } from "../modules/hero/hero.route";
import { publicationRouter } from "../modules/publication/publication.route";
import { founderRouter } from "../modules/founder/founder.router";
import { committeeRouter } from "../modules/committee/committee.route";
const router = express.Router();

const moduleRouter = [
  {
    path: "/about",
    route: aboutRouter,
  },
  {
    path: "/advertise",
    route: advertiseRouter,
  },
  {
    path: "/banner",
    route: bannerRouter,
  },
  {
    path: "/blog",
    route: blogRouter,
  },
  {
    path: "/event",
    route: eventRoute,
  },
  {
    path: "/gallery",
    route: galleryRoute,
  },
  {
    path: "/member",
    route: memberRoute,
  },
  {
    path: "/like",
    route: likeRoute,
  },
  {
    path: "/comment",
    route: commentRouter,
  },
  {
    path: "/jwt",
    route: jwtRouter,
  },
  {
    path: "/payment",
    route: paymentRoute,
  },
  {
    path: "/work",
    route: workRouter,
  },
  {
    path: "/hero",
    route: heroRouter,
  },
  {
    path: "/publication",
    route: publicationRouter,
  },
  {
    path: "/founder",
    route: founderRouter,
  },
  {
    path: "/committee",
    route: committeeRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
