from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import StreamField
from wagtail.admin.edit_handlers import StreamFieldPanel, FieldPanel, PageChooserPanel, InlinePanel
from streams.blocks import Tags


from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class HomePage(Page):
    max_count = 1

    subpage_types = [
        'about.AboutPage',
        'blog.BlogListPage',
        'contact.ContactPage',
    ]

    # =======================STRUCTS===================================================
    member_card = blocks.StructBlock(
        [
            ("profile_pic", ImageChooserBlock(required=True)),
            ("name", blocks.CharBlock(
                required=True, blank=True, null=True)),
            ("tagline", blocks.CharBlock(
                required=True, blank=True, null=True)),
            ("number_of_jobs", blocks.IntegerBlock(
                required=True, blank=True, null=True)),
            ("skill_tags", Tags()),
            ("more_detail", blocks.PageChooserBlock(
                required=True, blank=True, null=True)),
        ],
    )

    service_card = blocks.StructBlock(
        [
            ("icon", ImageChooserBlock(required=False)),
            ("service_type", blocks.CharBlock(
                max_lenght=500, required=True, blank=True, null=True)),
            ("hours_of_experience", blocks.IntegerBlock(default=0)),
        ]
    )

    section_title = blocks.StructBlock(
        [
            ("section_top_title", blocks.CharBlock(
                max_lenght=500, required=True, blank=True, null=True)),
            ("section_title", blocks.CharBlock(
                max_lenght=500, required=True, blank=True, null=True)),
            ("section_bottom_title", blocks.CharBlock(
                max_lenght=500, required=True, blank=True, null=True)),
        ]
    )

    stat = blocks.StructBlock(
        [
            ("name", blocks.CharBlock()),
            ("value", blocks.IntegerBlock())
        ]
    )

    offering = blocks.StructBlock(
        [
            ("section_top_title", blocks.CharBlock(
                max_lenght=500, required=True, blank=True, null=True)),
            ("section_title", blocks.CharBlock(
                max_lenght=500, required=True, blank=True, null=True)),
            ("section_description", blocks.RichTextBlock(
                required=True, blank=True, null=True)),
        ]
    )

    features = blocks.StructBlock([
        ("Feature_icon", ImageChooserBlock(
            required=False, blank=True, null=True)),
        ("Feature_Title", blocks.CharBlock(
            max_lenght=500, required=True, blank=True, null=True)),
        ("Feature_Text", blocks.CharBlock(
            max_lenght=500, required=True, blank=True, null=True))
    ]
    )

    link_group = blocks.ListBlock(
        blocks.StructBlock(
            [
                ("title", blocks.CharBlock(max_lenght=500,
                                           required=True, blank=True, null=True)),
                ("links", blocks.ListBlock(
                    blocks.StructBlock(
                        [
                            ("link", blocks.PageChooserBlock())
                        ]
                    )
                ))
            ]
        )
    )
    # ==================================META SECTION====================================

    hero_one = StreamField([
        ("login", blocks.PageChooserBlock()),
        ("signup", blocks.PageChooserBlock()),
        ("Title", blocks.CharBlock()),
        ("subtitle", blocks.CharBlock())
    ],
        null=True,
        blank=True,
    )

    my_services = StreamField([
        ("section_heading", section_title),
        ("service_card", service_card),
        ("personal_service_button", blocks.PageChooserBlock(
            required=True, blank=True, null=True))
    ],
        null=True,
        blank=True,
    )

    customer_service_stats = StreamField([
        ("statistic", stat)
    ],
        null=True,
        blank=True,
    )

    offering_cta = StreamField([
        ("offering_detail", offering),
        ("offering_action", blocks.PageChooserBlock()),
    ],
        null=True,
        blank=True,
    )

    team_detail = StreamField([
        ("member_card", member_card)
    ],
        null=True,
        blank=True,

    )

    hire_cta = StreamField([
        ("offering_detail", offering),
        ("offering_action", blocks.PageChooserBlock()),
    ],
        null=True,
        blank=True,
    )

    features_list = StreamField([
        ("offering_cta", features),
    ],
        null=True,
        blank=True,
    )

    final_hire_cta = StreamField([
        ("offering_detail", offering),
        ("offering_action", blocks.PageChooserBlock()),
    ],
        null=True,
        blank=True,
    )

    footer = StreamField([
        ("link_group", link_group),
        ("Terms_of_service", blocks.PageChooserBlock()),
        ("Privacy_Policy", blocks.PageChooserBlock()),
        ("Copy_Right_Owner", blocks.PageChooserBlock()),
        ("Login", blocks.PageChooserBlock()),
        ("Sign_Up", blocks.PageChooserBlock()),
    ],
        null=True,
        blank=True,
    )

    content_panels = Page.content_panels + [
        StreamFieldPanel("hero_one"),
        StreamFieldPanel("my_services"),
        StreamFieldPanel("customer_service_stats"),
        StreamFieldPanel("offering_cta"),
        StreamFieldPanel("team_detail"),
        StreamFieldPanel("hire_cta"),
        StreamFieldPanel("features_list"),
        StreamFieldPanel("final_hire_cta"),
        StreamFieldPanel("footer")
    ]
