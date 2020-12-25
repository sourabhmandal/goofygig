from django.db import models

# Create your models here.
from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class TitleAndSubtitle(blocks.StructBlock):
    title = blocks.CharBlock(
        max_length=500, required=False, blank=True, null=True)
    subtitle = blocks.CharBlock(
        max_length=500, required=False, blank=True, null=True)


class IconTitleSubtitle(blocks.StructBlock):
    icon = blocks.CharBlock(
        max_length=500, required=False, blank=True, null=True)
    title = blocks.CharBlock(
        max_length=500, required=False, blank=True, null=True)
    subtitle = blocks.CharBlock(
        max_length=500, required=False, blank=True, null=True)


class TopTitleSubtitle(blocks.StructBlock):
    top_title = blocks.CharBlock(
        max_length=500, required=False, blank=True, null=True)
    title = blocks.CharBlock(
        max_length=500, required=False, blank=True, null=True)
    subtitle = blocks.CharBlock(
        max_length=500, required=False, blank=True, null=True)


class ExternalLink(blocks.StructBlock):
    external_link = blocks.URLBlock(required=True, blank=True, null=True)


class Tags(blocks.StructBlock):
    skill_tag = blocks.CharBlock(required=True, blank=True, null=True)

# =============================================================================================
# =============================================================================================
