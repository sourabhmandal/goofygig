from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import StreamField
from wagtail.admin.edit_handlers import StreamFieldPanel, FieldPanel, PageChooserPanel, InlinePanel


from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class AboutPage(Page):
    section = blocks.StructBlock([
        ("section_pictue", ImageChooserBlock(
            required=False, blank=True, null=True)),
        ("section_title", blocks.CharBlock(
            max_lenght=500, required=True, blank=True, null=True)),
        ("section_description", blocks.RichTextBlock(
            max_lenght=500, required=True, blank=True, null=True))
    ]
    )
    # ===========================================================================
    max_count = 1

    parent_page_type = [
        'home.HomePage'
    ]
    subpage_types = []

    hero_about = StreamField([
        ("Title", blocks.CharBlock()),
        ("subtitle", blocks.CharBlock()),
        ("profile_image", ImageChooserBlock())
    ],
        null=True,
        blank=True,
    )

    about_section = StreamField([
        ("Section_Block", section)
    ],
        null=True,
        blank=True,
    )

    content_panels = Page.content_panels + [
        StreamFieldPanel("hero_about"),
        StreamFieldPanel("about_section")
    ]
