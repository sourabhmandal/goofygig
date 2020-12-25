from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import StreamField
from wagtail.admin.edit_handlers import StreamFieldPanel, FieldPanel, PageChooserPanel, InlinePanel


from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class BlogListPage(Page):
    max_count = 1
    # =============================STRUCT=====================================================
    article_card = blocks.StructBlock([
        ("article_card_pictue", ImageChooserBlock(
            required=False, blank=True, null=True)),
        ("article_card_author_pictue", ImageChooserBlock(
            required=False, blank=True, null=True)),
        ("article_card_author_name", blocks.CharBlock(
            required=False, blank=True, null=True)),
        ("article_card_title", blocks.CharBlock(
            max_lenght=500, required=True, blank=True, null=True)),
        ("article_card_description", blocks.RichTextBlock(
            max_lenght=500, required=True, blank=True, null=True))
    ]
    )
    # ===========================================================================

    hero_blog = StreamField([
        ("Title", blocks.CharBlock()),
        ("subtitle", blocks.CharBlock()),
        ("profile_image", blocks.CharBlock()),
    ],
        null=True,
        blank=True,
    )

    featured_section = StreamField([
        ("Featured_Articles", article_card),
    ],
        null=True,
        help_text="5 articles",
        blank=True,
    )

    popular_section = StreamField([
        ("Popular_Articles", article_card),
    ],
        null=True,
        help_text="ideally 6 articles",
        blank=True,
    )

    latest_section = StreamField([
        ("Latest_Articles", article_card),
    ],
        null=True,
        help_text="ideally 6 articles",
        blank=True,
    )

    content_panels = Page.content_panels + [
        StreamFieldPanel("hero_blog"),
        StreamFieldPanel("featured_section"),
        StreamFieldPanel("popular_section"),
        StreamFieldPanel("latest_section")
    ]
