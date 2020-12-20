from django.db import models

from wagtail.core.models import Page
from wagtail.images.models import Image

from wagtail.admin.edit_handlers import StreamFieldPanel, FieldPanel, PageChooserPanel, InlinePanel
from wagtail.images.edit_handlers import ImageChooserPanel

from wagtail.core.fields import StreamField

from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class ArticlePage(Page):
    article_section = StreamField([
        ("article_description", blocks.RichTextBlock(
            max_lenght=500, required=True, blank=True, null=True))
    ])
    # ===========================================================================

    parent_page_type = [
        'blog.BlogListPage'
    ]
    subpage_types = []

    article_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    article_author_pictue = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    article_Title = models.CharField(
        max_length=500, blank=True, null=True)

    article_author_name = models.CharField(
        max_length=500, blank=True, null=True)

    content_panels = Page.content_panels + [
        ImageChooserPanel("article_image"),
        FieldPanel("article_Title"),
        ImageChooserPanel("article_author_pictue"),
        FieldPanel("article_author_name"),
        StreamFieldPanel("article_section")
    ]
